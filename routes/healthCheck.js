const express = require('express');
require('dotenv').config();

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to Spirit11 Fantasy Cricket API!');
});

module.exports = router;
