const {loadProducts, filterCategory, getProduct, getProducts} = require('./../controllers/productController')

const express = require('express')
const router = express.Router()

//router.use('/:id/cart', shoppingRouter)

router.route('/').get(getProducts)                  

router.route('/create').post(loadProducts)

router.route('/category/:category').get(filterCategory)

router.route('/:id').get(getProduct)


module.exports = router