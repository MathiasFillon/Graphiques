'use strict';

const Sellsy = require('node-sellsy');

var sellsy = new Sellsy({
  creds: {
    consumerKey: process.env.SELLSY_CONSUMER_KEY,
    consumerSecret: process.env.SELLSY_CONSUMER_SECRET,
    userToken: process.env.SELLSY_USER_TOKEN,
    userSecret: process.env.SELLSY_USER_SECRET
  }
});

const PARAMS = {
  search: {
    contains: 'test',
  }
};

/**
 * The Main controller object
 */
function MainController() {}

MainController.prototype.getInfo = function (req, res, next) {
  sellsy.api({
    method: 'Infos.getInfos',
    params: PARAMS
  }).then(data => {
    res.json(data);
  }).catch(e => {
    next(e);
  });
}

MainController.prototype.getClients = function (req, res, next) {
  sellsy.api({
    method: 'Client.getList',
    params: PARAMS
  }).then(data => {
    res.json(data);
  }).catch(e => {
    next(e);
  });
};

module.exports = MainController;