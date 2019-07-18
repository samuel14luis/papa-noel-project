const express = require('express');
const router = express.Router();

const p = require('../controllers/product_Controller');
/*
http://localhost:3000/api/products/get/list
http://localhost:3000/api/products/get/interval/:last&:num
http://localhost:3000/api/products/get/:idProduct
http://localhost:3000/api/products/new
http://localhost:3000/api/products/add-label/
*/
router.get('/get/list', p.getProducts)
router.get('/get/interval/', p.getProductsInterval)
router.get('/get/:idProduct', p.getProduct)
router.post('/new', p.insertProduct)
router.post('/add-label', p.addLabel)

module.exports = router;