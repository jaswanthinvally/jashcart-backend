const express = require('express')
const { createorder } = require('../controllers/OrderController')
const router = express.Router()

router.route('/orders').post(createorder) 
module.exports = router