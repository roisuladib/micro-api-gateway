const express = require('express');
const router = express.Router();
const myCoursesHandle = require('../handler/courses/myCourses');

router.get('/', myCoursesHandle.getAll);
router.post('/create', myCoursesHandle.create);
 
module.exports = router;