const express = require('express')
const router = express.Router();
const respositoryController = require('../controllers/products_repository_controller')
const productsController = require('../controllers/buy_controller')
const CreateUserController = require('../controllers/user_create_account_controller')
const loginController = require('../controllers/user_login_controller');
const verifyJWT = require('./../services/verify_JWT')
router.get('/products', verifyJWT, async (req, res, next) => {

    respositoryController(res)
})
router.post('/shop', async (req, res) => {
    productsController(req, res)
})
router.post('/CreateUser', verifyJWT, async (req, res) => {
    CreateUserController(req, res)
})

router.post('/login', async (req, res) => {
    loginController(req, res)
})

module.exports = router; 