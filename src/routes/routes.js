const express = require('express')
const router = express.Router();
const userController = require('../api/controllers/user_controller')
const shopController = require('../api/controllers/shop_controller')
const verifyJWT = require('../middleware/verify_JWT')
router.get('/products', shopController.repository)
router.post('/shop', verifyJWT, shopController.buy)
router.post('/CreateUser', userController.createuser)

router.post('/login', userController.login)

module.exports = router; 