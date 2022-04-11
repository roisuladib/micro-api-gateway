const express = require('express');
const router = express.Router();
const coursesHandle = require('../handler/courses');
const verifyToken = require('../../middlewares/verifyToken'); 
const can = require('../../middlewares/permissions');

router.get('/', coursesHandle.getAll);
router.get('/detail/:id', coursesHandle.getDetail);

router.post('/create', verifyToken, can('admin'), coursesHandle.create);
router.put('/update/:id', verifyToken, can('admin'), coursesHandle.update);
router.delete('/delete/:id', verifyToken, can('admin'), coursesHandle.destroy);
 
module.exports = router;