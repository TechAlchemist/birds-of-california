const User = require('../models/user');
const bcrypt = require('bcrypt');
const SALT_ROUND = 10;

function newUser(req, res) {
    res.render('users/new');
}

function signUp(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(SALT_ROUND));
    User.create(req.body, function(error, newUser) {
        console.log(newUser);
        res.redirect('/');
    });
}
// initial routing to login
function login(req, res) {
    res.render('users/login', {errorMessage: req.session.error});
}

function authenticate(req, res) {
    User.findOne({
        email: req.body.username
    }, function (error, foundUser) {
        if (foundUser === null) {
            req.session.error = 'Account not found. ';
            res.redirect('/users/login');   
        }
        else {
            const passwordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
            if (passwordMatch) {
                delete req.session.error;
                req.session.userId = foundUser._id;
                res.redirect('/');
            }
            else {
                req.session.error = 'Incorrect username or password. ';
                res.redirect('/users/login');
            }
        }
    })
}

function signOut(req, res) {
    req.session.destroy(function(err) {
        delete req.user;
        res.redirect('/');
    });
}

module.exports = {
    new: newUser,
    signUp,
    login,
    authenticate,
    signOut
};