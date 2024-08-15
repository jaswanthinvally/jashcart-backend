const express = require('express');
const { getproduct, getsingleproduct, createproduct } = require('../controllers/ProductController');
const router = express.Router();

router.route('/products').get(getproduct);

router.route('/products/:id').get(getsingleproduct);

router.route('/createproduct').post(createproduct)

module.exports = router;
