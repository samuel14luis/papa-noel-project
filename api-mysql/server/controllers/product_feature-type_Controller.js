const dbConnection = require('../dbConnection');
const conn = dbConnection();
const utilities = require('../utilities')

const TypeOfFeatureModel = require('../models/product_feature-type_Model')

let TypeOfFeatureController = {};
/*TYPEOF_FEATURE{idTypeOf_Feature, name}
http://localhost:3000/api/features/types/get/list
http://localhost:3000/api/features/types/get/:id
http://localhost:3000/api/features/types/new
http://localhost:3000/api/features/types/delete/
http://localhost:3000/api/features/types/update/name/
*/
TypeOfFeatureController.getFeatureTypes = (req, res) => {
    TypeOfFeatureModel.getFeatureTypes(conn, (err, data) => {
        res.json(data)
    })
}

TypeOfFeatureController.getFeatureType = (req, res) => {
    TypeOfFeatureModel.getFeatureType(conn, req.params.idTypeOf_Feature, (err, data) => {
        res.json(data)
    })
}

TypeOfFeatureController.insertFeatureType = (req, res) => {
    const tof = {
        name: req.body.name
    }

    TypeOfFeatureModel.insertFeatureType(conn, tof, (error, result) => {
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
                msg: 'type_of_feature was Inserted',
                result
            })
        }
    })
}

TypeOfFeatureController.updateFeatureType = (req, res) => {
    if (typeof req.body.name === 'string' ) {
        const tof = {
            idTypeOf_Feature: req.params.idTypeOf_Feature || req.body.idTypeOf_Feature,
            name: req.body.name
        }

        TypeOfFeatureModel.updateFeatureType(conn, tof, (error, result) => {
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
                    msg: 'type_of_feature name was updated',
                    result
                })
            }
        })
    } else {
        res.status(500).json({
            success: false,
            msg: 'Error: Se esperaba una cadena de texto con el nuevo nombre para el type_of_feature.',
            result: 'No se actualizó el nombre del type_of_feature.'
        })
    }
}

TypeOfFeatureController.deleteFeatureType = (req, res) => {
    let idTypeOf_Feature = req.params.idTypeOf_Feature || req.body.idTypeOf_Feature;
    TypeOfFeatureModel.deleteFeatureType(conn, idTypeOf_Feature, (error, result) => {
        if (error) {
            res.status(500).json(error)
            throw error;
        } else {
            res.json(result)
        }
    })
}

module.exports = TypeOfFeatureController;