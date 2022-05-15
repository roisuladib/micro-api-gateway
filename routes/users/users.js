const express = require('express');
const router = express.Router();
const usersHandle = require('../handler/users');
const verifyToken = require('../../middlewares/verifyToken');

router.post('/register', usersHandle.register);
router.post('/login', usersHandle.login);
router.put('/update', verifyToken, usersHandle.update);
router.get('/', verifyToken, usersHandle.getUser);
router.post('/logout', verifyToken, usersHandle.logout);
 
module.exports = router;
