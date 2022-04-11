const express = require('express');
const router = express.Router();
const imageCoursesHandle = require('../handler/courses/imageCourses');

router.post('/create', imageCoursesHandle.create);
router.delete('/delete/:id', imageCoursesHandle.destroy);
 
module.exports = router;