const express = require('express');
const { userLogin } = require('../authcheck/auth');
const router = express.Router();
const Post = require('../models/post');


//  ROUTES 
// /posts/add route  show page 
router.get('/add', userLogin, (req, res) => {
    res.render('posts/add');
})

// POST route 
router.post('/', userLogin, (req, res) => {
    Post.create(req.body, (err, createdPost) => {
        req.body.user = req.user._id;
        res.redirect('/dashboard' + createdPost._id);
    });
});

module.exports = router;