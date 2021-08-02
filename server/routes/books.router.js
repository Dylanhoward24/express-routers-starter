const express = require('express');

// setup an array to store my book objects
const bookList = [];

// make a router
// a router is like a mini-app
const router = express.Router();

// we can use `router` just like we use app
// the actual URL here is "/book"
router.get('/', (req, res) => {
    res.send(bookList);
});

router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;