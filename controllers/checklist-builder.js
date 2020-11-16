const Bird = require('../models/bird');

function index(req, res) {
    Bird.find({}, function(error, birds) {
        console.log(error)
        res.render('checklist/index', {
            birds
        });
    });
}

function create(req, res) {
	var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);

}

module.exports = {
    index,
    create
};