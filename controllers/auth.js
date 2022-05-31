const express = require('express');
const router = express.Router()
const passport = require('passport');

// ROTUEs
// google auth 
router.get('/google',
  passport.authenticate('google', { scope:
      [ 'profile' ] }
));

// auth callback
router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/' }), (req, res) => {
    res.redirect('/dashboard');
});

//  logout ROUTE
router.get('/logout', (req, res) => {
    req.logout( (err) => {
        res.redirect('/');
    });
});


module.exports = router;