const express = require('express');
const router = express.Router();

const b = require('../controllers/product_brand_Controller');
/*
http://localhost:3000/api/sales/brands/get/list
http://localhost:3000/api/sales/brands/get/:id
http://localhost:3000/api/sales/brands/new
http://localhost:3000/api/sales/brands/delete/
http://localhost:3000/api/sales/brands/update/name/
*/
router.get('/get/list', b.getBrands)
router.get('/get/:idBrand', b.getBrand)
router.post('/new', b.insertBrand)
router.delete('/delete', b.deleteBrand)
router.put('/update/name/', b.updateNameBrand)

module.exports = router;