const dbConnection = require('../dbConnection');
const conn = dbConnection();
const utilities = require('../utilities')

const bannerModel = require('../models/ventas_banner_Model')

let bannerController = {};

//getBanners, getAllBanners, getBanner(id), insertBanner(banner.imgURL,banner.active), deleteBanner(id)
//updateImgBanner(banner.imgURL, banner.idBanner), updateActiveBanner(banner.active, banner.idBanner)

bannerController.getBanners = (req, res) => {
    bannerModel.getBanners(conn, (err, data) => {
        res.json(data)
    })
}

bannerController.getAllBanners = (req, res) => {
    bannerModel.getAllBanners(conn, (err, data) => {
        res.json(data)
    })
}

bannerController.getBanner = (req, res) => {
    bannerModel.getBanner(conn, req.params.idBanner, (err, data) => {
        res.json(data)
    })
}

bannerController.insertBanner = (req, res) => {
    const new_banner = {
        imgURL: req.body.imgURL,
        active: req.body.active || 1
    }

    bannerModel.insertBanner(conn, new_banner, (error, result) => {
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
                msg: 'Banner Inserted',
                result
            })
        }
    })
}

bannerController.updateImgBanner = (req, res) => {
    if (typeof req.body.imgURL === 'string' && utilities.validarExtension(req.body.imgURL, '.png,.jpg,.jpeg,.svg,.gif,.bmp')) {
        const banner_update = {
            idBanner: req.params.idBanner || req.body.idBanner,
            imgURL: req.body.imgURL
        }

        bannerModel.updateImgBanner(conn, banner_update, (error, result) => {
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
                    msg: 'Banner update',
                    result
                })
            }
        })
    } else {
        res.status(500).json({
            success: false,
            msg: 'Error: Se esperaba una cadena de texto con la ruta de la imagen del banner.',
            result: 'No se actualizó la ruta de la imagen del banner.'
        })
    }
}

bannerController.updateActiveBanner = (req, res) => {
    const b = {
        idBanner: req.params.idBanner || req.body.idBanner,
        active: parseInt(req.body.active)
    }
    if (!isNaN(b.active) && b.active < 2 && b.active > -1) {
        bannerModel.updateActiveBanner(conn, b, (error, result) => {
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
                    msg: 'Banner state updated',
                    result
                })
            }
        })
    } else {
        res.status(500).json({
            success: false,
            msg: 'Error: Se esperaba un número natural de un dígito, un 0 o un 1.',
            result: 'No se actualizó el estado del banner.'
        })
    }
}

bannerController.deleteBanner = (req, res) => {
    let idBanner = req.params.idBanner || req.body.idBanner;
    bannerModel.deleteBanner(conn, idBanner, (error, result) => {
        if (error) {
            res.status(500).json(error)
            throw error;
        } else {
            res.json(result)
        }
    })
}

module.exports = bannerController;