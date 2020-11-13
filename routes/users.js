const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/new', usersController.new);

module.exports = router;