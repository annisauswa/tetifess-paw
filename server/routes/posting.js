const express = require('express')
const router = express.Router()
const { readPosting, createPosting, searchPosting, editPosting } = require('../controller/posting')

router.get('', readPosting)
router.post('/:userId', createPosting)
router.get('/search', searchPosting)
router.patch('/edit/:id', editPosting)

module.exports = router