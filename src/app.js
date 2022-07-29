const express = require('express');
const session = require('express-session');
const path = require('path');
const { dbConfig } = require('./config');
const { home,auth }=require('./routes');  

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dbConfig();

app.use(session({ secret: 'authApp', cookie: { maxAge: 600000 } }));
app.use(express.json());
app.use('/', home)
app.use('/auth',auth)
module.exports = {app}