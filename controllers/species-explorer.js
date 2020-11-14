function index(req, res) {
    // console.log('req.user inside index controller', req.user);
    res.render('species/index');
}

module.exports = {
    index
};