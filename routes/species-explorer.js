const express = require('express');
const router = express.Router();
const speciesExplorerController = require('../controllers/species-explorer');

router.get('/', speciesExplorerController.index);

module.exports = router;