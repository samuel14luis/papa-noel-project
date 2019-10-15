const express = require('express');
const router = express.Router();

const u = require('../controllers/user_Controller');
/*
http://localhost:3000/api/user/labels/get/list
http://localhost:3000/api/user/labels/get/:id
http://localhost:3000/api/user/labels/new
http://localhost:3000/api/user/labels/delete/
http://localhost:3000/api/user/labels/update/name/
*/

//Registro y sesiones
router.post('/registrar', u.newUser)
router.get('/login', u.login)
router.put('/update/sex', u.updateSex)
router.put('/update/birthday', u.updateBirthday)

//Acciones
router.get('/search/:search', u.search)

//Producto
router.get('/product/details/:id', u.productDetails)
router.get('/product/comments/:id', u.productComments)
router.get('/product/map/:id', u.productMap)

//Negocio
router.get('/business/details', u.businessDetails)
router.get('/business/near', u.businessNear)



module.exports = router;