const Bird = require('../models/bird');

function index(req, res) {
    Bird.find({}, function(error, birds) {
        console.log(error)
        res.render('checklist/index', {
            birds
        });
    });
    
}

module.exports = {
    index
};