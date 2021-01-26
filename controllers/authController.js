'use strict';
const {LocalStorage}  = require('node-localstorage');
const localstorage = new LocalStorage('./scracth');

const loginView = async (req, res, next) => {
    try {
        res.render('login', {layout: 'loginlayout'});
    } catch (error) {
        console.log(error);
    }
}
const registerView = async (req, res, next) => {
    try {
       res.render('register', {layout: 'loginlayout'});
    } catch (error) {
        console.log(error);
    }
}
const handleLogin = (req, res, next) => {
    const obj = {
        email: req.body.email,
        password: req.body.password
    };
    localstorage.setItem('user', JSON.stringify(obj));
    res.redirect('/');
}

const logOut = (req, res, next) => {
    localstorage.removeItem('user');
    res.redirect('/');
}

module.exports = {
    loginView,
    registerView,
    handleLogin,
    logOut
}