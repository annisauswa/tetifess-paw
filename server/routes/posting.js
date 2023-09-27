const express = require('express')
const router = express.Router()
const { readPosting, createPosting, searchPosting, editPosting, deletePosting, likePost } = require('../controller/posting')

router.get('/', readPosting)
router.get('/search', searchPosting)
router.get('/:postId', readPosting)
router.post('/:userId', createPosting)
router.patch('/:postId', editPosting)
router.delete('/:postId', deletePosting)
router.post('/:postId/like', likePost)
module.exports = router