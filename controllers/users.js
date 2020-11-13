function newUser(req, res) {
    res.render('users/new');
}

module.exports = {
    new: newUser
};