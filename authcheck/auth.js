

// auth middleware - move to own folder/file
module.exports = {
    userLogin: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        } else {
            res.redirect('/login');
        }
    },
    userNotLogin: (req, res, next) => {
        if (req.isAuthenticated()) {
            res.redirect('/dashboard');
        } else {
            return next();
        }
    }
}