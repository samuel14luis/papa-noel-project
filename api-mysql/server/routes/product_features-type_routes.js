const express = require('express');
const router = express.Router();

const f = require('../controllers/product_feature-type_Controller');
/*TYPEOF_FEATURE{idTypeOf_Feature, name}
http://localhost:3000/api/features/types/get/list
http://localhost:3000/api/features/types/get/:id
http://localhost:3000/api/features/types/new
http://localhost:3000/api/features/types/delete/
http://localhost:3000/api/features/types/update/name/
*/
router.get('/get/list', f.getFeatureTypes)
router.get('/get/:idTypeOf_Feature', f.getFeatureType)
router.post('/new', f.insertFeatureType)
router.delete('/delete', f.deleteFeatureType)
router.put('/update/name/', f.updateFeatureType)

module.exports = router;