const bookModel = require('../models/bookModel');
const books = bookModel.list();

exports.index = (req, res, next) => {
    let id = req.query.detail;
    let book = books.find(x => x.id == id);
    res.render('books/bookDetail', {book});
}
