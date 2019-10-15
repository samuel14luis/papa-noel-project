const dbConnection = require('../dbConnection');
const conn = dbConnection();
const utilities = require('../utilities')

const userModel = require('../models/user_Model')

let userController = {};

//Registro y sesiones
userController.newUser = (req, res) => {
    userModel.newUser(conn, (err, data) => {
        res.json(data)
    })
}

userController.login = (req, res) => {
    userModel.login(conn, req.params.idLabel, (err, data) => {
        res.json(data)
    })
}

userController.updateSex = (req, res) => {
    userModel.updateSex(conn, (err, data) => {
        res.json(data)
    })
}

userController.updateBirthday = (req, res) => {
    userModel.updateBirthday(conn, req.params.idLabel, (err, data) => {
        res.json(data)
    })
}

//Acciones
userController.search = (req, res) => {
    userModel.search(conn, req.params.idLabel, (err, data) => {
        res.json(data)
    })
}

//Producto
userController.productDetails = (req, res) => {
    userModel.productDetails(conn, req.params.idLabel, (err, data) => {
        res.json(data)
    })
}

userController.productComments = (req, res) => {
    userModel.productComments(conn, req.params.idLabel, (err, data) => {
        res.json(data)
    })
}

userController.productMap = (req, res) => {
    userModel.productMap(conn, req.params.idLabel, (err, data) => {
        res.json(data)
    })
}

//Negocio
userController.businessDetails = (req, res) => {
    userModel.businessDetails(conn, req.params.idLabel, (err, data) => {
        res.json(data)
    })
}

userController.businessNear = (req, res) => {
    userModel.businessNear(conn, req.params.idLabel, (err, data) => {
        res.json(data)
    })
}

module.exports = userController;