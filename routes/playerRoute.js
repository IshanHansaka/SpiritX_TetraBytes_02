const express = require('express');
const Player = require('../models/Player');
const router = express.Router();
const { authenticateUser, authenticateAdmin } = require('../middleware/auth');

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
    res.status(200).json(players);
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
