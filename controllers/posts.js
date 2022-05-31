const express = require('express');
const { append } = require('express/lib/response');
const { userLogin } = require('../authcheck/auth');
const router = express.Router();
const Post = require('../models/Post');


// posts/add route 
router.get('/add', userLogin, (req, res) => {
    res.render('posts/add');
})



module.exports = router;