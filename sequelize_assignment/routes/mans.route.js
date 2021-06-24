const express = require('express');
const router = express.Router();
const gigController = require('../controller/man.controller');

router.post('/', gigController.addMan);
router.get('/', gigController.findMans);
router.get('/:id', gigController.findManById);
router.put('/:id', gigController.updateMan);
router.delete('/:id', gigController.deleteById);

module.exports = router;