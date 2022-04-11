const express = require('express');
const router = express.Router();
const mentorsHandle = require('../handler/courses/mentors');

router.get('/', mentorsHandle.getAll);
router.get('/:id', mentorsHandle.getDetail); 
router.post('/create', mentorsHandle.create); 
router.put('/update/:id', mentorsHandle.update); 
router.delete('/delete/:id', mentorsHandle.destroy); 
 
module.exports = router;