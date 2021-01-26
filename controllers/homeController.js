'use strict';
const {LocalStorage}  = require('node-localstorage');
const localstorage = new LocalStorage('./scracth');

const indexView = (req, res, next) => {
    const data = localstorage.getItem('user') !== null ? JSON.parse(localstorage.getItem('user')) : null;
    if (data !== null) {
        res.render('home');        
    }else {
        res.redirect('/login');
    }
}

const iconsView = (req, res, next) => {
    res.render('icons');
}
 
const mapView = (req, res, next) => {
    res.render('map');
}

const profileView = (req, res, next) => {
    res.render('profile');
}

const tableView = (req, res, next) => {
    res.render('table');
}


module.exports = {
    indexView,
    iconsView,
    mapView,
    profileView,
    tableView
}