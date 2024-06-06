const express = require('express');
const { getproduct, getsingleproduct } = require('../controllers/ProductController');
const router = express.Router();

router.route('/products').get(getproduct);

router.route('/products/:id').get(getsingleproduct);

module.exports = router;
