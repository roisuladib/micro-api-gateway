const express = require('express');
const router = express.Router();
const chaptersHandle = require('../handler/courses/chapters');

router.get('/', chaptersHandle.getAll);
router.get('/detail/:id', chaptersHandle.getDetail);
router.post('/create', chaptersHandle.create);
router.put('/update/:id', chaptersHandle.update);
router.delete('/delete/:id', chaptersHandle.destroy); 
 
module.exports = router;