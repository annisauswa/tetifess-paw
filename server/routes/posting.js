const express = require('express')
const router = express.Router()
const { readPosting, createPosting, searchPosting, editPosting, deletePosting } = require('../controller/posting')

router.get('', readPosting)
router.post('/:userId', createPosting)
router.get('/search', searchPosting)
router.patch('/edit/:id', editPosting)
router.delete('/:postId', deletePosting)

module.exports = router