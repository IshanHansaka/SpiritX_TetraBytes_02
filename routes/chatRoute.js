const express = require('express');
const router = express.Router();
require('dotenv').config();
const { authenticateUser, authenticateAdmin } = require('../middleware/auth');
const model = require('../config/gemini');
const fsPromises = require('fs').promises;
const path = require('path');
const axios = require('axios');

const PLAYER_API_URL = 'http://localhost:5000/players';

router.post('/', async (req, res) => {
  try {
    const response = await axios.get(PLAYER_API_URL);
    const players = response.data;

    const playerContext = players
      .map(
        (player) =>
          `Name: ${player.name}, University: ${player.university}, Category: ${player.category},  
      Matches: ${player.inningsPlayed}, Runs: ${player.totalRuns}, Balls Faced: ${player.ballsFaced},  
      Batting Average: ${player.battingAverage}, Strike Rate: ${player.battingSR},  
      Wickets: ${player.wickets}, Overs Bowled: ${player.oversBowled}, Runs Conceded: ${player.runsConceded},  
      Economy Rate: ${player.economyRate}, Bowling Strike Rate: ${player.bowlingSR}, Player Points: ${player.points}, 
      Player Value: ${player.value}`
      )
      .join('\n');

    const { message } = req.body;
    const contextFilePath = path.resolve(__dirname, '../chat/context.txt');
    const context = await fsPromises.readFile(contextFilePath, 'utf-8');

    const prompt = `You are a knowledgeable and helpful AI chatbot designed to answer questions about cricket players' personal details and statistics. You specialize in providing clear, accurate, and informative responses. ${context} Player Data: ${playerContext} User Query: "${message}"`;

    const result = await model.generateContent(prompt);
    res.status(200).json({ message: result.response.text() });
    console.log('Response generated successfully.');
  } catch (error) {
    console.error('Error generating response:', error);
    res
      .status(500)
      .send({ message: 'Error processing request.', error: error.message });
  }
});

module.exports = router;
