const express = require('express');
const router = express.Router();
const bookDetail = require('../controllers/bookDetail');
const detail = bookDetail.index;

router.get('/', detail);

router.get('/back', (req, res) => {
    res.redirect('/');
});

module.exports = router;