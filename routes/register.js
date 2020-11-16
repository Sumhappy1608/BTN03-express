const express = require('express');
const router = express.Router();
const register = require('../controllers/regisController');
const regisForm = register.sendform;

router.get('/', regisForm);

router.get('/back', (req, res) => {
    res.redirect('/login');
});

router.get('/regis', (req, res) => {
    console.log('do nothing');
    res.redirect('/register');
});

module.exports = router;