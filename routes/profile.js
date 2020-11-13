const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile');

const authorization = require('../utils/authorization');

router.get('/', authorization.isAuthenticated, profileController.index);

module.exports = router;