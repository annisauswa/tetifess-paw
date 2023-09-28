const express = require('express')
const router = express.Router()
const { readPosting, createPosting, searchPosting, editPosting, deletePosting, likePost } = require('../controller/posting')

// DESC     : Search for posts based on a query parameter
// ROUTE    : GET "/posting/search"
// PARAMS   : param (String) - The search query parameter
// BODY     : None
// RESPONSE : Array of post objects matching the search or an error message
router.get('/search', searchPosting)

// DESC     : Get all posts with optional sorting
// ROUTE    : GET "/posting"
// PARAMS   : ascending (String, optional) - Sort direction for posts ('true' for ascending, 'false' for descending)
// BODY     : None
// RESPONSE : Array of post objects or an error message
router.get('/', readPosting)

// DESC     : Get a specific post by its ID
// ROUTE    : GET "/posting/:postId"
// PARAMS   : postId (String) - The ID of the specific post to fetch
// BODY     : None
// RESPONSE : Single post object or error message
router.get('/:postId', readPosting)

// DESC     : Create a post for logged in user
// ROUTE    : POST "/posting/post"  
// PARAMS   : None
// BODY     : text, image (optional)
// RESPONSE : Success message or error message
router.post('/post', createPosting)


// DESC     : Edit a post of logged in user
// ROUTE    : PATCH "/posting/:postId"  
// PARAMS   : postId (String) - The ID of the post to edit
// BODY     : JSON object containing updated post data (text: String, image: String - optional)
// RESPONSE : Edited post object or error message
router.patch('/:postId', editPosting)

// DESC     : Delete a post for logged in user
// ROUTE    : DELETE "/posting/:postId"  
// PARAMS   : postId (String) - the ID of the post created by the user
// BODY     : None
// RESPONSE : Success message or error message
router.delete('/:postId', deletePosting)

// DESC     : Like/Unlike the Post from currently logged in user
// ROUTE    : POST "/posting/:postId/like"  
// PARAMS   : None
// BODY     : None
// RESPONSE : Success message or error message
router.post('/:postId/like', likePost)

module.exports = router