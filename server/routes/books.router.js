const express = require('express');

// make a router
// a router is like a mini-app
const router = express.Router();

// we can use `router` just like we use app
router.get('/book', (req, res) => {
    res.send(bookList);
});

router.post('/book', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;