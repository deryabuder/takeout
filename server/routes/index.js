var express = require('express')
var router = express.Router()

const appData = require('../mock/data.json')
const seller = appData.seller
const goods = appData.goods
const ratings = appData.ratings
/* GET home page. */
router.get('/seller', function (req, res, next) {
  res.json({
    status: '200',
    result: seller

  })
})

router.get('/goods', function (req, res, next) {
  res.json({
    status: '200',
    result: goods
  })
})

router.get('/ratings', function (req, res, next) {
  res.json({
    status: '200',
    result: ratings
  })
})
module.exports = router
