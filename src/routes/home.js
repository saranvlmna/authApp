const express = require('express');
const controller = require('../controllers/home');
const home = new express.Router()    

home.get('/', controller.listUsers);


module.exports = home;