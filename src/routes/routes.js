import express from 'express'
const router = express.Router()
const userController = require('../api/controllers/user_controller')
const productController = require('../api/controllers/products_controller')
const orderController = require('../api/controllers/order_controller')
const verifyJWT = require('../middleware/verify_JWT')
//Crud's products 
router.get('/products', productController.getProducts)
router.get('/products/:id', productController.getOneProduct)
router.post('/products',verifyJWT, productController.createProduct)
router.put('/products/:id',verifyJWT, productController.updateProduct)
router.delete('/products/:id',verifyJWT, productController.deleteProduct)

//Crud's order
router.get('/order', verifyJWT, orderController.getOrder)
router.post('/order', verifyJWT, orderController.createOrder)
router.put('/order', verifyJWT, orderController.updateOrder)
router.delete('/order', verifyJWT, orderController.deleteOrder)


router.post('/CreateUser', userController.createuser)
router.post('/login', userController.login)

export default router; 