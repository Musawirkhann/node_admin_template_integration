const express = require('express');
const router = express.Router();
const {loginView, registerView}  = require('../controllers/authController');


router.get('/login', loginView);
router.get('/register', registerView);


module.exports = {
    routes: router
}