const Bird = require('../models/bird');
const checklist = require('../models/checklist');
const Checklist = require('../models/checklist');


function index(req, res) {
    Bird.find({}, function (error, birds) {
        console.log(error);
        res.render('checklist/index', {
            birds,
            userData: req.user
        });
    });
}

function create(req, res) {
    let arr = [];
    let data = req.body;
    // console.log(req.body);
    console.log('data length = ', data.birdsIds['0']);
    for (birdId in data.birdsIds) {
        arr.push(data.birdsIds[birdId]);
    }
    let joinedArr = arr.join(',');
    let title = data.title;

    const checklist = new Checklist();

    checklist.belongsTo = '5faee53eef98e415608b56c9';
    checklist.birdIds = joinedArr;
    if (title != '') checklist.listTitle = title;
    checklist.save(function (error) {
        if (error) {
            console.log('FATAL ERROR IN DOCUMENT INSERTION. ');
            res.redirect('/');
        }
        else {
            console.log('CHECKLIST DOCUMENT INSERTED SUCCESSFULLY. ');
            res.redirect('/');
        }
    })

}

function viewer(req, res) {
    Checklist.find({ "belongsTo": '5faee53eef98e415608b56c9' }, function (error, checklists) {
        res.render('checklist/viewer', {
            userData: req.user,
            checklists
        });
    })
}

function show(req, res) {
    Checklist.findById(req.params.id, function (error, list) {
        let ids = list.birdIds.split(',');
        Bird.find().where('_id').in(ids).exec((err, records) => {
            res.render('checklist/show', {
                list,
                records,
                userData: req.user
            });
        });

    })
}

function update(req, res) {
    let arr = [];
    let data = req.body;
    for (birdId in data.birdsIds) {
        arr.push(data.birdsIds[birdId]);
    }
    let joinedArr = arr.join(',');
    let listId = data.listId;
    let listTitle = data.listTitle;
    Checklist.findById(listId, function (error, checklist) {
        checklist.birdIds = joinedArr; // update the birds in the list
        if (listTitle != '') checklist.listTitle = listTitle; // update list title

        checklist.save(function (error) {
            if (error) {
                console.log('FATAL ERROR IN DOCUMENT INSERTION. ');
                res.redirect('/');
            }
            else {
                console.log('CHECKLIST DOCUMENT INSERTED SUCCESSFULLY. ');
                res.redirect('/');
            }
        })
    })
}

function deleteList(req, res) {
    console.log('IM AM IN DELETE!!!! YAAAAAAAY')
    Checklist.findById(req.params.id, function(err, list) {
        console.log('THIS NEEDS TO DIE!!!', list);
        list.remove();
        list.save( function(error) {
            res.redirect('/checklist/viewer');
        })
    })
}

module.exports = {
    index,
    create,
    viewer,
    show,
    update,
    delete : deleteList
};

