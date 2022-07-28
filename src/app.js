const express = require('express');
const session = require('express-session');
const { dbConfig } = require('./config');
const { home,auth }=require('./routes');  

const app = express();

dbConfig();

app.use(session({ secret: 'authApp', cookie: { maxAge: 600000 } }));
app.use(express.json());
app.use('/', home)
app.use('/auth',auth)
module.exports = {app}