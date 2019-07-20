const dbConnection = require('../dbConnection');
const conn = dbConnection();
const utilities = require('../utilities')

const FavModel = require('../models/product_favs_Model')

let FavController = {};
/*
http://localhost:3000/api/products/favs/list
http://localhost:3000/api/products/favs/add
http://localhost:3000/api/products/favs/remove
*/
FavController.getFavs = (req, res) => {
    FavModel.getFavs(conn, req.params.idUser || req.body.idUser, (err, data) => {
        res.json(data)
    })
}

FavController.addToFavs = (req, res) => {
    FavModel.addToFavs(conn, req.body.idProduct, req.body.idUser, (error, result) => {
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
                msg: 'Product was added to favs',
                result
            })
        }
    })
}

FavController.removeFromFavs = (req, res) => {
    FavModel.removeFromFavs(conn, req.body.idProduct, req.body.idUser, (error, result) => {
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
                msg: 'Product was removed from favs',
                result
            })
        }
    })
}

module.exports = FavController;