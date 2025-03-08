const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const cors = require('cors');

app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = app;
