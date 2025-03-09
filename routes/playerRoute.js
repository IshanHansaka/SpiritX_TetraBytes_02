const express = require('express');
const Player = require('../models/Player');
const router = express.Router();
const { authenticateUser, authenticateAdmin } = require('../middleware/auth');

function calculatePlayerStats(player) {
  const stats = {
    economyRate:
      player.oversBowled === 0
        ? 0
        : (player.runsConceded / (player.oversBowled * 6)) * 6,
    battingAverage:
      player.inningsPlayed === 0 ? 0 : player.totalRuns / player.inningsPlayed,
    battingSR:
      player.ballsFaced === 0
        ? 0
        : (player.totalRuns / player.ballsFaced) * 100,
    bowlingSR:
      player.wickets === 0 ? 0 : (player.oversBowled * 6) / player.wickets,
  };

  stats.points =
    stats.battingSR / 5 +
    stats.battingAverage * 0.8 +
    (stats.bowlingSR === 0 ? 0 : 500 / stats.bowlingSR) +
    (stats.economyRate === 0 ? 0 : 140 / stats.economyRate);

  stats.value = Math.round(((9 * stats.points + 100) * 1000) / 50000) * 50000;

  return stats;
}

router.post('/', authenticateAdmin, async (req, res) => {
  const player = new Player(req.body);
  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error creating player', error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const players = await Player.find();
    const playersWithStats = players.map((player) => {
      const stats = calculatePlayerStats(player);
      return { ...player.toObject(), ...stats };
    });

    res.status(200).json(playersWithStats);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching players', error: err.message });
  }
});

router.get('/:id', authenticateUser, async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).json({ message: 'Player not found' });

    const stats = calculatePlayerStats(player);
    res.status(200).json({ ...player.toObject(), ...stats });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error fetching player', error: err.message });
  }
});

router.patch('/:id', authenticateAdmin, async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).json({ message: 'Player not found' });
    Object.assign(player, req.body);
    const updatedPlayer = await player.save();
    res.status(200).json(updatedPlayer);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error updating player', error: err.message });
  }
});

router.delete('/:id', authenticateAdmin, async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).json({ message: 'Player not found' });

    await player.deleteOne();
    res.status(200).json({ message: 'Player deleted' });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Error deleting player', error: err.message });
  }
});

module.exports = router;
