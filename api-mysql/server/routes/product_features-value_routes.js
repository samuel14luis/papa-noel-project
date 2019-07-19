const express = require('express');
const router = express.Router();

const f = require('../controllers/product_feature-value_Controller');
/*VALUEOF_FEATURE{idValueOf_Feature, name, TypeOf_Feature_idTypeOf_Feature}
http://localhost:3000/api/features/values/get/list
http://localhost:3000/api/features/values/get/:id
http://localhost:3000/api/features/values/new
http://localhost:3000/api/features/values/delete/
http://localhost:3000/api/features/values/update/name/
*/
router.get('/get/list', f.getFeatureValues)
router.get('/get/:idValueOf_Feature', f.getFeatureValue)
router.post('/new', f.insertFeatureValue)
router.delete('/delete', f.deleteFeatureValue)
router.put('/update/name/', f.updateFeatureValueName)

module.exports = router;