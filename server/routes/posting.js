const express = require('express')
const router = express.Router()
const { createPosting, searchPosting, readPosting } = require('../controller/posting')

router.post('/:userId', createPosting)
router.get('/search', searchPosting)
router.get('', readPosting)

module.exports = router