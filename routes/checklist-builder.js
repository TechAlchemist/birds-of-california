const express = require('express');
const router = express.Router();
const checklistController = require('../controllers/checklist-builder');
const authorization = require('../utils/authorization');

router.get('/', checklistController.index);
router.post('/create', authorization.isAuthenticated, checklistController.create);
router.delete('/:id', authorization.isAuthenticated, checklistController.delete);
router.post('/update', authorization.isAuthenticated, checklistController.update);
router.get('/viewer',  checklistController.viewer);
router.get('/:id', authorization.isAuthenticated, checklistController.show);

module.exports = router;