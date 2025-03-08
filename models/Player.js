const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  university: { type: String, required: true },
  category: {
    type: String,
    enum: ['Batsman', 'All-Rounder', 'Bowler'],
  },
  totalRuns: { type: Number, default: 0 },
  ballsFaced: { type: Number, default: 0 },
  inningsPlayed: { type: Number, default: 0 },
  wickets: { type: Number, default: 0 },
  oversBowled: { type: Number, default: 0 },
  runsConceded: { type: Number, default: 0 },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
