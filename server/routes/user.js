const express = require('express')
const router = express.Router()
const { registerUser, getOtherUser, updateUser, getProfile, deleteUser, deleteLoggedInUser, loginUser, logoutUser, searchUser } = require("../controller/user")
const { verifyToken, verifyAdmin } = require('../middleware/auth')

// PUBLIC ROLE

// DESC     : Register a new user
// ROUTE    : POST "/user"
// PARAMS   : None
// BODY     : JSON object containing user registration data (username: String, password: String, name: String, bio: String)
// RESPONSE : User object or error message
router.post('/', registerUser)

// DESC     : Log in an existing user
// ROUTE    : POST "/user/login"
// PARAMS   : None
// BODY     : JSON object containing user login credentials (username: String, password: String)
// RESPONSE : User object and JWT token or error message
router.post('/login', loginUser)

// DESC     : Log out the currently authenticated user
// ROUTE    : POST "/user/logout"
// PARAMS   : None
// BODY     : None
// RESPONSE : Success message or error message
router.post('/logout', logoutUser)

// DESC     : Get the profile information for the currently authenticated user
// ROUTE    : GET "/user/profile"
// PARAMS   : None
// BODY     : None
// RESPONSE : User profile object or Unauthorized error if not authenticated
router.get('/profile', verifyToken, getProfile)

// DESC     : Search for users based on a query parameter
// ROUTE    : GET "/user/search"
// PARAMS   : param (String) - The search query parameter
// BODY     : None
// RESPONSE : Array of user objects matching the search or an error message
router.get('/search', verifyToken, searchUser)

// DESC     : Get user information for a specific user by their ID
// ROUTE    : GET "/user/:userId"
// PARAMS   : userId (String) - The ID of the intended user
// BODY     : None
// RESPONSE : User object for the specified user or error message
router.get('/:userId', verifyToken, getOtherUser)

// DESC     : Delete the currently logged in user
// ROUTE    : DELETE "/user/delete"
// PARAMS   : None
// BODY     : None
// RESPONSE : Success message or error message
router.delete('/delete', verifyToken, deleteLoggedInUser)

// DESC     : Update username, display name, and bio of a single user
// ROUTE    : PATCH "/user/edit"
// PARAMS   : UserId of intended user
// BODY     : JSON object containing updated user data (username: String, name: String, bio: String)
//                                                      Can be any combination of those three
// RESPONSE : Process succeeded or Failed
router.patch('/edit',verifyToken, updateUser)

module.exports = router