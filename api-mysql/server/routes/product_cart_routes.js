const express = require('express');
const router = express.Router();

const cart = require('../controllers/product_cart_Controller');
/*
http://localhost:3000/api/products/cart/list
http://localhost:3000/api/products/cart/add
http://localhost:3000/api/products/cart/select
http://localhost:3000/api/products/cart/set-quantity
http://localhost:3000/api/products/cart/remove
*/
router.get('/list', cart.getCart)
router.post('/add', cart.addToCart)
router.put('/set-select', cart.setSelectItem)
router.put('/set-quantity', cart.setQuantity)
router.delete('/remove', cart.removeFromCart)

module.exports = router;