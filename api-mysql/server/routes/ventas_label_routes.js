const express = require('express');
const router = express.Router();

const l = require('../controllers/ventas_label_Controller');
/*
http://localhost:3000/api/sales/labels/get/list
http://localhost:3000/api/sales/labels/get/:id
http://localhost:3000/api/sales/labels/new
http://localhost:3000/api/sales/labels/delete/
http://localhost:3000/api/sales/labels/update/name/
*/
router.get('/get/list', l.getLabels)
router.get('/get/:idLabel', l.getLabel)
router.post('/new', l.insertLabel)
router.delete('/delete', l.deleteLabel)
router.put('/update/name/', l.updateNameLabel)

module.exports = router;