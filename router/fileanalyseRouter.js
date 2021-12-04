const express = require('express')
const router = express.Router()
const fileanalyseController = require('../controller/fileanalyseController')

router.route('/api/profile')
.post((fileanalyseController))

module.exports = router