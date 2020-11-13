const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

const authorization = require('../utils/authorization');

router.get('/new', usersController.new);
router.post('/signup', usersController.signUp);

router.get('/login', usersController.login);
router.post('/login', usersController.authenticate);

router.get('/signout', usersController.signOut);
module.exports = router;