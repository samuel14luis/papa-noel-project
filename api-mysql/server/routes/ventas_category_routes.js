const express = require('express');
const router = express.Router();

const c = require('../controllers/ventas_category_Controller');
/*
http://localhost:3000/api/sales/categories/get/list
http://localhost:3000/api/sales/categories/get/:id
http://localhost:3000/api/sales/categories/new
http://localhost:3000/api/sales/categories/news
http://localhost:3000/api/sales/categories/delete/
http://localhost:3000/api/sales/categories/update/icon/
http://localhost:3000/api/sales/categories/update/name/
*/
router.get('/get/list', c.getCategories)
router.get('/get/:idCategory', c.getCategory)
router.post('/new', c.insertCategory)
router.post('/news', c.insertCategoryDev)
router.delete('/delete', c.deleteCategory)
router.put('/update/icon/', c.updateIconCategory)
router.put('/update/name/', c.updateNameCategory)

module.exports = router;