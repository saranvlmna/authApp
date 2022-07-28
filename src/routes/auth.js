const express = require('express');
const controller = require('../controllers/auth');
const user = new express.Router()
const {validate} = require('../middlewares');
const { userSchema, loginSchema } = require("../schema");

user.post('/signup', validate(userSchema), controller.signup);
user.get('/login', validate(loginSchema), controller.login);

module.exports = user;