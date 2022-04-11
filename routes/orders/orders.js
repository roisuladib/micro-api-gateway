const express = require('express');
const router = express.Router();
const ordersHandle = require('../handler/orders');

router.get('/', ordersHandle.getOrders);

module.exports = router;