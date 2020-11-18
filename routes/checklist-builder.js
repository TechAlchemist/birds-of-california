const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklist-builder');
const authorization = require('../utils/authorization');

router.get('/', checklistController.index);
router.get('/viewer', checklistController.viewer);
router.get('/:id', checklistController.show);
router.post('/create', checklistController.create);
router.post('/update', checklistController.update);

module.exports = router;