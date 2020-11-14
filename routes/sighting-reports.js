const express = require('express');
const router = express.Router();
const sightingsController = require('../controllers/sighting-reports');

const authorization = require('../utils/authorization');

router.get('/', authorization.isAuthenticated, sightingsController.index);

module.exports = router;