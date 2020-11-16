const express = require('express');
const router = express.Router();
const login = require('../controllers/loginController');
const loginForm = login.sendform;

router.get('/', loginForm);

router.get('/register', (req, res) => {
    res.redirect('/register');
});

router.get('/back', (req, res) => {
    res.redirect('/');
})

module.exports = router;