const express = require('express');
const router = express.Router();

const b = require('../controllers/ventas_banner_Controller');

//api/ventas/banner
//getBanners, getAllBanners, getBanner(id), 
router.get('/get/list', b.getBanners)
router.get('/get/all', b.getAllBanners)
router.get('/get/:idBanner', b.getBanner)
//insertBanner(banner.imgURL,banner.active), deleteBanner(id)
router.post('/new', b.insertBanner)
router.delete('/delete/:idBanner', b.deleteBanner)
//updateImgBanner(banner.imgURL, banner.idBanner), updateActiveBanner(banner.active, banner.idBanner)
router.put('/udt-img/:idBanner', b.updateImgBanner)
router.put('/udt-active/:idBanner', b.updateActiveBanner)

module.exports = router;