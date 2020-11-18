const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklist-builder');
const authorization = require('../utils/authorization');

router.get('/', checklistController.index);
router.post('/create', checklistController.create);
router.delete('/:id', checklistController.delete);
router.post('/update', checklistController.update);
router.get('/viewer', checklistController.viewer);
router.get('/:id', checklistController.show);

module.exports = router;