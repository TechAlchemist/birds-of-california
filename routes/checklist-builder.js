const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklist-builder');


router.get('/', checklistController.index);
router.post('/create', checklistController.create)

module.exports = router;