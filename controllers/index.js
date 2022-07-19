// dependencies 
const express = require('express');
const { userLogin, userNotLogin } = require('../authcheck/auth');
const router = express.Router()
const Post = require('../models/Post');

// ROUTES

// index route before login
router.get('/', userNotLogin, (req, res) => {
    res.render('login')
})


// Route after login
router.get('/dashboard', userLogin, (req, res) => {
    const posts = Post.find({ user: req.user.id }).lean()

    res.render('dashboard', {
        name: req.user.firstName,
        posts
    })
})





module.exports = router;