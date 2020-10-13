const express = require('express');
const passport = require('passport');
const session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    cookie: {},
    saveUninitialized: true,
    resave: false
}))