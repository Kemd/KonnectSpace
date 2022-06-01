const express = require('express');
const { userLogin } = require('../authcheck/auth');
const router = express.Router();
const Post = require('../models/post');
// seed data
const postSeed = require('../models/postSeed');


// routes 

// Seed routes 
router.get('/seed', userLogin, (req, res) => {
    // Post.deleteMany({}, (err, seeds) => {})

    Post.create(postSeed, (err, data) => {
        res.render('seed', {
            data
        })
    })
})

// index route 
router.get('/', userLogin, (req, res) => {
    Post.find({}, (err, allPosts) => {
        res.render('index.ejs', {
            posts: allPosts
        });
    })
})

//  new route 
router.get('/new', userLogin, (req, res) => {
    res.render('new.ejs');
})

//  delete route 
router.delete('/:id', userLogin, (req, res) => {
    Post.findByIdAndDelete(req.params.id, () => {
        res.redirect('/posts');
    })
})

// update route 
router.put('/:id', userLogin, (req, res) => {
    Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    },
        (err, updatedPost) => {
            res.redirect(`/posts/${req.params._id}`);
        })
})

//  create route 
router.post('/', userLogin, (req, res) => {
    Post.create(req.body, (err, createdPost) => {
        res.redirect('/posts');
    })
})

//  edit route 
router.get('/:id/edit', userLogin, (req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
        res.render('edit.ejs', {
            post: foundPost
        });
    })
})

// show route 
router.get('/:id', userLogin, (req, res) => {
    Post.findById(req.params.id, (err, foundPost) => {
        res.render('show.ejs', {
            post: foundPost
        });
    })
})

module.exports = router;