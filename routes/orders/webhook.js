const express = require('express');
const router = express.Router();
const webhookHandle = require('../handler/orders/webhook');

router.post('/', webhookHandle.webhook);

module.exports = router;