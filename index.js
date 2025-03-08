const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const healthCheck = require('./routes/healthCheck');
const playerRoute = require('./routes/playerRoute');
const loginRoute = require('./routes/loginRoute');
const signupRoute = require('./routes/signupRoute');

app.use('/', healthCheck);
app.use('/players', playerRoute);
app.use('/login', loginRoute);
app.use('/signup', signupRoute);

module.exports = app;
