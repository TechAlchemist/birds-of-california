function index(req, res) {
    // console.log('req.user inside index controller', req.user);
    res.render('checklist/index');
}

module.exports = {
    index
};