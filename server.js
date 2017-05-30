'use strict';

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const mainRouter = require('./server/routes/main');

const port = process.env.PORT || 8080;
const app = express();

/**
 * Set our body parser
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/**
 * Declare our static files path
 */
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Declare our web service dashboard api
 */
app.use('/api/dashboard', mainRouter());
//TODO :CHAINER LES ROUTEURS DONT UN DE TRACAGE POUR ENSUITE LE PASSER AU SUIVANT AVEC NEXT

/**
 * Send special vendors files (outside the public directory)
 */
app.use('/node_modules', function (req, res, next) {
  res.sendFile(req.url, {
    root: './node_modules'
  });
});

/**
 * Connect to our database
 */
mongoose.connect('mongodb://localhost:27017/superproducteur-test');

/**
 * Start listening on the configured port number
 */
app.listen(port, () => {
  console.log(`Server is now listening on port ${port}`);
});