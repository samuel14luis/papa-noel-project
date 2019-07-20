const dbConnection = require('../dbConnection');
const conn = dbConnection();
const utilities = require('../utilities')

const CartModel = require('../models/product_cart_Model')

let CartController = {};
/*
http://localhost:3000/api/products/cart/list
http://localhost:3000/api/products/cart/add
http://localhost:3000/api/products/cart/select
http://localhost:3000/api/products/cart/set-quantity
http://localhost:3000/api/products/cart/remove
*/
CartController.getCart = (req, res) => {
    CartModel.getCart(conn, req.params.idUser || req.body.idUser, (err, data) => {
        res.json(data)
    })
}

CartController.addToCart = (req, res) => {
    CartModel.addToCart(conn, req.body.idUser, req.body.idProduct, req.body.quantity, (error, result) => {
        if (error) {
            res.status(500).json({
                success: false,
                msg: 'Error',
                result: error
            })
            throw error;
        }
        if (result) {
            res.json({
                success: true,
                msg: 'Product was procesed for add to cart',
                result
            })
        }
    })
}

CartController.setSelectItem = (req, res) => {
    CartModel.setSelectItem(conn, req.body.idUser, req.body.idProduct, req.body.selected, (error, result) => {
        if (error) {
            res.status(500).json({
                success: false,
                msg: 'Error',
                result: error
            })
            throw error;
        }
        if (result) {
            res.json({
                success: true,
                msg: 'Product-selected was modified',
                result
            })
        }
    })
}

CartController.setQuantity = (req, res) => {
    CartModel.setQuantity(conn, req.body.idUser, req.body.idProduct, req.body.quantity, (error, result) => {
        if (error) {
            res.status(500).json({
                success: false,
                msg: 'Error',
                result: error
            })
            throw error;
        }
        if (result) {
            res.json({
                success: true,
                msg: 'Product-quantity was modified',
                result
            })
        }
    })
}

CartController.removeFromCart = (req, res) => {
    CartModel.removeFromCart(conn, req.body.idUser, req.body.idProduct, (error, result) => {
        if (error) {
            res.status(500).json({
                success: false,
                msg: 'Error',
                result: error
            })
            throw error;
        }
        if (result) {
            res.json({
                success: true,
                msg: 'Product was procesed to remove from cart',
                result
            })
        }
    })
}

module.exports = CartController;