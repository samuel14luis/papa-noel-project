const dbConnection = require('../dbConnection');
const conn = dbConnection();
const utilities = require('../utilities')

const LabelModel = require('../models/ventas_label_Model')

let labelController = {};
/*
http://localhost:3000/api/sales/labels/get/list
http://localhost:3000/api/sales/labels/get/:id
http://localhost:3000/api/sales/labels/new
http://localhost:3000/api/sales/labels/delete/
http://localhost:3000/api/sales/labels/update/name/
*/
labelController.getLabels = (req, res) => {
    LabelModel.getLabels(conn, (err, data) => {
        res.json(data)
    })
}

labelController.getLabel = (req, res) => {
    LabelModel.getLabel(conn, req.params.idLabel, (err, data) => {
        res.json(data)
    })
}

labelController.insertLabel = (req, res) => {
    const c = {
        name: req.body.name
    }

    LabelModel.insertLabel(conn, c, (error, result) => {
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
                msg: 'Label was Inserted',
                result
            })
        }
    })
}

labelController.updateNameLabel = (req, res) => {
    if (typeof req.body.name === 'string' ) {
        const c = {
            idLabel: req.params.idLabel || req.body.idLabel,
            name: req.body.name
        }

        LabelModel.updateNameLabel(conn, c, (error, result) => {
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
                    msg: 'Label name was updated',
                    result
                })
            }
        })
    } else {
        res.status(500).json({
            success: false,
            msg: 'Error: Se esperaba una cadena de texto con el nuevo nombre para la etiqueta.',
            result: 'No se actualizó el nombre de la etiqueta.'
        })
    }
}

labelController.deleteLabel = (req, res) => {
    let idLabel = req.params.idLabel || req.body.idLabel;
    LabelModel.deleteLabel(conn, idLabel, (error, result) => {
        if (error) {
            res.status(500).json(error)
            throw error;
        } else {
            res.json(result)
        }
    })
}

module.exports = labelController;