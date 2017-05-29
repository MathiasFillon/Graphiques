'use strict';

const express = require('express');
const MainController = require('../controllers/main');

module.exports = function () {

  let controller = new MainController();
  let router = express.Router();

  router.get('/', function (req, res, next) {
    return controller.getInfo(req, res, next);
  });

  router.get('/:id', function (req, res, next) {
    return controller.getClients(req, res, next);
  });

  return router;
}