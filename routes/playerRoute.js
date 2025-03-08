const express = require('express');
const Player = require('../models/Player');
const router = express.Router();
const { authenticateUser, authenticateAdmin } = require('../middleware/auth');

function economyRate(player) {
  if (player.oversBowled == 0) return 0;
  return player.runsConceded / player.oversBowled;
}

function battingAverage(player) {
  if (player.inningsPlayed == 0) return 0;
  return player.totalRuns / player.inningsPlayed;
}

function battingSR(player) {
  if (player.ballsFaced == 0) return 0;
  return (player.totalRuns / player.ballsFaced) * 100;
}

function bowlingSR(player) {
  if (player.wickets == 0) return 0;
  return (player.oversBowled * 6) / player.wickets;
}

function bowlingPoints1(player) {
  if (bowlingSR(player) == 0) return 0;
  return 500 / bowlingSR(player);
}

function bowlingPoints2(player) {
  if (economyRate(player) == 0) return 0;
  return 140 / economyRate(player);
}

function playerPoints(player) {
  return (
    battingSR(player) / 5 +
    battingAverage * 0.8 +
    bowlingPoints1(player) +
    bowlingPoints2(player)
  );
}

function playerValue(player){
  return (9*playerPoints(player)+100)*1000
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

router.get('/', authenticateUser, async (req, res) => {
  try {
    const players = await Player.find();

    const playersWithCalculatedData = players.map(player => {
      player.economyRate = economyRate(player);
      player.battingAverage = battingAverage(player);
      player.battingSR = battingSR(player);
      player.bowlingSR = bowlingSR(player);
      player.points = playerPoints(player);
      player.value = playerValue(player);
      return player;
    });

    res.status(200).json(playersWithCalculatedData);
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
    
    player.economyRate = economyRate(player);
    player.battingAverage = battingAverage(player);
    player.battingSR = battingSR(player);
    player.bowlingSR = bowlingSR(player);
    player.points = playerPoints(player);
    player.value = playerValue(player);
    
    res.status(200).json(player);
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
