const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklist-builder');


router.get('/', checklistController.index);

module.exports = router;