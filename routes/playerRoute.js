const express = require('express');
const Player = require('../models/Player');
const router = express.Router();
const authenticateAdmin = require('../middleware/auth');

router.post('/', async (req, res) => {
  const player = new Player(req.body);
  try {
    const newPlayer = await player.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.status(500).send('Error creating player');
  }
});

router.get('/', async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (err) {
    res.status(500).send('Error fetching players');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).send({ message: 'Player not found' });
    res.status(200).json(player);
  } catch (err) {
    res.status(500).send('Error fetching player');
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).send({ message: 'Player not found' });
    Object.assign(player, req.body);
    const updatedPlayer = await player.save();
    res.status(204).json(updatedPlayer);
  } catch (err) {
    res.status(500).send('Error updating player', { message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) return res.status(404).send({ message: 'Player not found' });
    await player.deleteOne();
    res.status(204).json({ message: 'Player deleted' });
  } catch (err) {
    res.status(500).send('Error deleting player', { message: err.message });
  }
});

module.exports = router;
