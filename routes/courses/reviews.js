const express = require('express');
const router = express.Router();
const reviewsHandle = require('../handler/courses/reviews');

router.post('/create', reviewsHandle.create); 
router.put('/update/:id', reviewsHandle.update); 
router.delete('/delete/:id', reviewsHandle.destroy); 
 
module.exports = router;