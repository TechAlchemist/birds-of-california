function index(req, res) {
    console.log('req.user inside index controller', req.user);
    res.render('index', {userData: req.user});
}

module.exports = {
    index
};