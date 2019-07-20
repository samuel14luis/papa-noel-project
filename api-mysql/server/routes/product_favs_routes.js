const express = require('express');
const router = express.Router();

const fav = require('../controllers/product_favs_Controller');
/*
http://localhost:3000/api/products/favs/list
http://localhost:3000/api/products/favs/add
http://localhost:3000/api/products/favs/remove
*/
router.get('/list', fav.getFavs)
router.post('/add', fav.addToFavs)
router.post('/remove', fav.removeFromFavs)

module.exports = router;