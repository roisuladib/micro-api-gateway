const express = require('express');
const router = express.Router();
const refreshTokenHandle = require('../handler/refresh-tokens');

router.post('/', refreshTokenHandle.refreshToken);
 
module.exports = router;
