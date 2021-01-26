'use strict';

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

module.exports = {
    loginView,
    registerView
}