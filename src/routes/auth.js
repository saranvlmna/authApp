const express = require('express');
const controller = require('../controllers/auth');
const user = new express.Router()
const { validate } = require('../middlewares');
const { userSchema, loginSchema } = require("../schema");

user.post('/signup',validate(userSchema),  controller.signup);
user.post('/login',validate(loginSchema), controller.login);

user.get('/signup', controller.signupForm)
user.get('/login', controller.loginForm)
user.get('/logout', controller.logout)


module.exports = user;