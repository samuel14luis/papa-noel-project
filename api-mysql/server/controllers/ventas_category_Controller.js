const dbConnection = require('../dbConnection');
const conn = dbConnection();
const utilities = require('../utilities')

const categoryModel = require('../models/ventas_category_Model')

let categoryController = {};
/*
http://localhost:3000/api/sales/categories/get/list
http://localhost:3000/api/sales/categories/get/:id
http://localhost:3000/api/sales/categories/new
http://localhost:3000/api/sales/categories/news
http://localhost:3000/api/sales/categories/delete/
http://localhost:3000/api/sales/categories/update/icon/
*/
categoryController.getCategories = (req, res) => {
    categoryModel.getCategories(conn, (err, data) => {
        res.json(data)
    })
}

categoryController.getCategory = (req, res) => {
    categoryModel.getCategory(conn, req.params.idCategory, (err, data) => {
        res.json(data)
    })
}

categoryController.insertCategory = (req, res) => {
    const c = {
        iconURL: req.body.iconURL,
        name: req.body.name
    }

    categoryModel.insertCategory(conn, c, (error, result) => {
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
                msg: 'Categoria procesada para ser agregada',
                result
            })
        }
    })
}

categoryController.insertCategoryDev = (req, res) => {
    categoryModel.insertCategoryDev(conn, req.body.categories, (error, result) => {
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
                msg: 'Categorias procesadas para ser agregadas',
                result
            })
        }
    })
}

categoryController.updateIconCategory = (req, res) => {
    if (typeof req.body.iconURL === 'string' && utilities.validarExtension(req.body.iconURL, '.png,.jpg,.jpeg,.svg,.gif,.bmp')) {
        const c = {
            idCategory: req.params.idCategory || req.body.idCategory,
            iconURL: req.body.iconURL
        }

        categoryModel.updateIconCategory(conn, c, (error, result) => {
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
                    msg: 'Category updated',
                    result
                })
            }
        })
    } else {
        res.status(500).json({
            success: false,
            msg: 'Error: Se esperaba una cadena de texto con la ruta de la imagen para la categoría.',
            result: 'No se actualizó la ruta de la imagen de la categoría.'
        })
    }
}

categoryController.updateNameCategory = (req, res) => {
    if (typeof req.body.name === 'string' ) {
        const c = {
            idCategory: req.params.idCategory || req.body.idCategory,
            name: req.body.name
        }

        categoryModel.updateNameCategory(conn, c, (error, result) => {
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
                    msg: 'Category updated',
                    result
                })
            }
        })
    } else {
        res.status(500).json({
            success: false,
            msg: 'Error: Se esperaba una cadena de texto con el nuevo nombre para la categoría.',
            result: 'No se actualizó el nombre de la categoría.'
        })
    }
}

categoryController.deleteCategory = (req, res) => {
    let idCategory = req.params.idCategory || req.body.idCategory;
    categoryModel.deleteCategory(conn, idCategory, (error, result) => {
        if (error) {
            res.status(500).json(error)
            throw error;
        } else {
            res.json(result)
        }
    })
}

module.exports = categoryController;