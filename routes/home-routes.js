const express = require('express');

const {indexView, iconsView, mapView, profileView, tableView} = require('../controllers/homeController');
const router = express.Router();


router.get('/', indexView);
router.get('/icons', iconsView);
router.get('/map', mapView);
router.get('/profile', profileView);
router.get('/table', tableView);


module.exports = {
    routes: router
}