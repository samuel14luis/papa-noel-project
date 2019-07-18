const dbConnection = require('../dbConnection');
const conn = dbConnection();
const utilities = require('../utilities')

const BrandModel = require('../models/product_brand_Model')

let BrandController = {};
/*PRODUCT_BRANDS{idBrand, brandName}
http://localhost:3000/api/sales/brands/get/list
http://localhost:3000/api/sales/brands/get/:id
http://localhost:3000/api/sales/brands/new
http://localhost:3000/api/sales/brands/delete/
http://localhost:3000/api/sales/brands/update/name/
*/
BrandController.getBrands = (req, res) => {
    BrandModel.getBrands(conn, (err, data) => {
        res.json(data)
    })
}

BrandController.getBrand = (req, res) => {
    BrandModel.getBrand(conn, req.params.idBrand, (err, data) => {
        res.json(data)
    })
}

BrandController.insertBrand = (req, res) => {
    const b = {
        brandName: req.body.brandName
    }

    BrandModel.insertBrand(conn, b, (error, result) => {
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
                msg: 'Brand was Inserted',
                result
            })
        }
    })
}

BrandController.updateNameBrand = (req, res) => {
    if (typeof req.body.brandName === 'string' ) {
        const b = {
            idBrand: req.params.idBrand || req.body.idBrand,
            brandName: req.body.brandName
        }

        BrandModel.updateNameBrand(conn, b, (error, result) => {
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
                    msg: 'Brand name was updated',
                    result
                })
            }
        })
    } else {
        res.status(500).json({
            success: false,
            msg: 'Error: Se esperaba una cadena de texto con el nuevo nombre para la Marca.',
            result: 'No se actualizó el nombre de la Marca.'
        })
    }
}

BrandController.deleteBrand = (req, res) => {
    let idBrand = req.params.idBrand || req.body.idBrand;
    BrandModel.deleteBrand(conn, idBrand, (error, result) => {
        if (error) {
            res.status(500).json(error)
            throw error;
        } else {
            res.json(result)
        }
    })
}

module.exports = BrandController;