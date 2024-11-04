const express = require('express');
const router = express.Routerr();
const Book = require('../models/book');

// route to list all the books

router.get('/books', async(req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    }
    catch (err) {
        res.status(500).jason({ message: err.message})
    }
});

 // route to add new book

 router.post('/books', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre,
        publishedDate: req.body.publishedDate,
        avarageRating: req.boby.avarageRating
    });

    try{
        const newBook = await book.save();
    res.status(201).json(newBook);
    }
    catch (err){
        res.status(400).json({ message: err.message});
    }
 });

 // route to get book by id

 router.get('/book/:id', async (req, res) => {
    try{
        const book = await Book.findById(req.params.id);
        if (book == null){
            return res.status(404).json({ message: 'Book not found :('})
        }
        res.json(book);
    }
    catch (err) {
        res.status(500).json({ message: err.message});
    }
 })

 module.exports = router;