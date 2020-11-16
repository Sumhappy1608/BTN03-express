const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const bookList = bookController.index

router.get('/', bookList);

router.get('/book_detail', (req, res) => {
    let id = req.query.detail;
    res.redirect('/detail/?detail=' + id);
});

module.exports = router;