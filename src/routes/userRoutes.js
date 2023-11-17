const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/restaurants', userController.getRestaurants);
router.post('/orders/:userId', userController.placeOrder);
router.get('/orders/:userId', userController.getOrderHistory);

module.exports = router;
