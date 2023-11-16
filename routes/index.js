var express = require('express');
var router = express.Router();
const { sequelize } = require('../db.js');
const { Book } = require('./book.js');


router.get('/', function(req, res, next) {
  res.render('book');
});
router.post('/book', async function(req, res, next) {

  const { title, authorName } = req.body;
  const newBook = Book.build({ title, authorName });

  try {
  
    await newBook.save();
    res.redirect('/success');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving book to database');
  }
});

router.get('/success', function(req, res, next) {
  res.send('Book saved to database');
});

module.exports = router;

async function main() {
// Find all books in the library
const books = await Book.findAll();

// Log the books to the console
console.log(books.map(book => book.toJSON()));
}

main();

