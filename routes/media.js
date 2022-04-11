const express = require('express');
const router = express.Router();
const mediaHandle = require('./handler/media');

router.get('/', mediaHandle.getAll);
router.post('/upload', mediaHandle.create);
router.delete('/delete/:id', mediaHandle.destroy);

module.exports = router;