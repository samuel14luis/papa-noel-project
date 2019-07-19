const dbConnection = require('../dbConnection');
const conn = dbConnection();
const utilities = require('../utilities')

const ValueOfFeatureModel = require('../models/product_feature-value_Model')

let ValueOfFeatureController = {};
/*VALUEOF_FEATURE{idValueOf_Feature, name, TypeOf_Feature_idTypeOf_Feature}
http://localhost:3000/api/features/values/get/list
http://localhost:3000/api/features/values/get/:id
http://localhost:3000/api/features/values/new
http://localhost:3000/api/features/values/delete/
http://localhost:3000/api/features/values/update/name/
*/
ValueOfFeatureController.getFeatureValues = (req, res) => {
    ValueOfFeatureModel.getFeatureValues(conn, (err, data) => {
        res.json(data)
    })
}

ValueOfFeatureController.getFeatureValue = (req, res) => {
    ValueOfFeatureModel.getFeatureValue(conn, req.params.idValueOf_Feature, (err, data) => {
        res.json(data)
    })
}

ValueOfFeatureController.insertFeatureValue = (req, res) => {
    const vof = {
        name: req.body.name,
        TypeOf_Feature_idTypeOf_Feature: req.body.TypeOf_Feature_idTypeOf_Feature
    }

    ValueOfFeatureModel.insertFeatureValue(conn, vof, (error, result) => {
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
                msg: 'value_of_feature was Inserted',
                result
            })
        }
    })
}

ValueOfFeatureController.updateFeatureValueName = (req, res) => {
    if (typeof req.body.name === 'string' ) {
        const vof = {
            idValueOf_Feature: req.params.idValueOf_Feature || req.body.idValueOf_Feature,
            name: req.body.name
        }

        ValueOfFeatureModel.updateFeatureValueName(conn, vof, (error, result) => {
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
                    msg: 'value_of_feature name was updated',
                    result
                })
            }
        })
    } else {
        res.status(500).json({
            success: false,
            msg: 'Error: Se esperaba una cadena de texto con el nuevo nombre para el value_of_feature.',
            result: 'No se actualizó el nombre del value_of_feature.'
        })
    }
}

ValueOfFeatureController.deleteFeatureValue = (req, res) => {
    let idValueOf_Feature = req.params.idValueOf_Feature || req.body.idValueOf_Feature;
    ValueOfFeatureModel.deleteFeatureValue(conn, idValueOf_Feature, (error, result) => {
        if (error) {
            res.status(500).json(error)
            throw error;
        } else {
            res.json(result)
        }
    })
}

module.exports = ValueOfFeatureController;