const User = require('../models/user');

function addUserToRequest(req,  res, next) {
    if (req.user) return next();
    if (req.session && req.session.userId) {
        User.findById(req.session.userId, function( error, foundUser) {
            req.user = foundUser;
            next();
        });
    }
    else {
        next();
    } 
}

function isAuthenticated(req, res, next) {
    if (req.user !== undefined) return next(); // user authed
    res.redirect('/users/login');
}

module.exports = {
    addUserToRequest,
    isAuthenticated
}