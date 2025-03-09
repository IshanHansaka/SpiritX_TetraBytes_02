const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json());

const healthCheck = require('./routes/healthCheck');
const playerRoute = require('./routes/playerRoute');
const loginRoute = require('./routes/loginRoute');
const signupRoute = require('./routes/signupRoute');
const chatRoutes = require('./routes/chatRoute');

app.use('/', healthCheck);
app.use('/players', playerRoute);
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/chat', chatRoutes);

module.exports = app;
