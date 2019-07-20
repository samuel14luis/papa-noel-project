const dbConnection = require('../dbConnection');
const conn = dbConnection();
const utilities = require('../utilities')

const ProductModel = require('../models/product_Model')

let ProductController = {};
/*
http://localhost:3000/api/products/get/list
http://localhost:3000/api/products/get/interval/:last&:num
http://localhost:3000/api/products/get/:idProduct
http://localhost:3000/api/products/new
http://localhost:3000/api/products/add-label/
*/
ProductController.getProducts = (req, res) => {
    ProductModel.getProducts(conn, (err, data) => {
        res.json(data)
    })
}

ProductController.getProductsByCategory = (req, res) => {
    ProductModel.getProductsByCategory(conn, req.params.idCategory || req.body.idCategory, (err, data) => {
        res.json(data)
    })
}

ProductController.getProductsInterval = (req, res) => {
    ProductModel.getProductsInterval(conn, req.params.last, req.params.num, (err, data) => {
        res.json(data)
    })
}

ProductController.getProduct = (req, res) => {
    ProductModel.getProduct(conn, req.params.idProduct, (err, data) => {
        res.json(data)
    })
}

ProductController.insertProduct = (req, res) => {
    const p = {
        name: req.body.name,
        img: req.body.img,
        description: req.body.description,
        Product_Brands_idBrand: req.body.Product_Brands_idBrand,
        Product_Category_idCategory: req.body.Product_Category_idCategory,
        unitPrize: req.body.unitPrize,
        unitProfit: req.body.unitProfit,
        stock: req.body.stock
    }

    ProductModel.insertProduct(conn, p, (error, result) => {
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
                msg: 'Product was Inserted',
                result
            })
        }
    })
}

ProductController.insertProductDev = (req, res) => {
    ProductModel.insertProductDev(conn, req.body.productos, (error, result) => {
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
                msg: 'Products was Inserted',
                result
            })
        }
    })
}

ProductController.addLabel = (req, res) => {
    ProductModel.addLabel(conn, req.body.idProduct, req.body.idLabel, (error, result) => {
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
                msg: 'Label was Added',
                result
            })
        }
    })
}

module.exports = ProductController;