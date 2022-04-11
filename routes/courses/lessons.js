const express = require('express');
const router = express.Router();
const lessonsHandle = require('../handler/courses/lessons');

router.get('/', lessonsHandle.getAll);
router.get('/detail/:id', lessonsHandle.getDetail);
router.post('/create', lessonsHandle.create);
router.put('/update/:id', lessonsHandle.update);
router.delete('/delete/:id', lessonsHandle.destroy);
 
module.exports = router;