const express = require('express')
const router = express.Router()
const { verifyAdmin } = require('../middleware/auth')
const { readPosting, createPosting, searchPosting, editPosting, deletePosting, likePost } = require('../controller/posting')

router.get('/', readPosting)
router.get('/search', searchPosting)
router.get('/:postId', readPosting)

// DESC     : Create a user post
// ROUTE    : POST "/posting/:userId"  
// PARAMS   : userId (String) - the ID of the user to POST
// BODY     : text, image (optional)
// RESPONSE : Success message or error message
router.post('/:userId', createPosting)
router.patch('/:postId', editPosting)

// DESC     : Delete a user post
// ROUTE    : DELETE "/posting/:postId"  
// PARAMS   : postId (String) - the ID of the post created by the user
// BODY     : None
// RESPONSE : Success message or error message
router.delete('/:postId', deletePosting)

// DESC     : Like/Unlike the Post
// ROUTE    : POST "/posting/:postId/like"  
// PARAMS   : postId (String) - the ID of the post created by the user
// BODY     : None
// RESPONSE : Success message or error message
router.post('/:postId/like', likePost)
module.exports = router