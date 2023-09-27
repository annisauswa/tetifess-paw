const express = require('express')
const router = express.Router()
const { verifyAdmin } = require('../middleware/auth')
const { readPosting, createPosting, searchPosting, editPosting, deletePosting, likePost } = require('../controller/posting')

router.get('/', readPosting)
router.get('/search', searchPosting)
router.get('/:postId', readPosting)
router.post('/:userId', createPosting)
router.patch('/:postId', verifyAdmin, editPosting)
router.delete('/:postId', verifyAdmin, deletePosting)
router.post('/:postId/like', likePost)
module.exports = router