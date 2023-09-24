const express = require('express')
const router = express.Router()
const { createPosting, searchPosting } = require('../controller/posting')

router.post('/:userId', createPosting)
router.get('/search', searchPosting)

module.exports = router