const express = require('express')
const router = express.Router()
const { registerUser, getUser, updateUser, getProfile, deleteUser, deleteLoggedInUser, loginUser, logoutUser } = require("../controller/user")
const { verifyToken, verifyAdmin } = require('../middleware/auth')

// PUBLIC ROLE

// DESC     : Register a new user
// ROUTE    : POST "/"
// PARAMS   : None
// BODY     : JSON object containing user registration data (username: String, password: String, name: String, bio: String)
// RESPONSE : User object or error message
router.post('/', registerUser)

// DESC     : Log in an existing user
// ROUTE    : POST "/login"
// PARAMS   : None
// BODY     : JSON object containing user login credentials (username: String, password: String)
// RESPONSE : User object and JWT token or error message
router.post('/login', loginUser)

// DESC     : Log out the currently authenticated user
// ROUTE    : POST "/logout"
// PARAMS   : None
// BODY     : None
// RESPONSE : Success message or error message
router.post('/logout', logoutUser)

// DESC     : Get user information for the currently authenticated user
// ROUTE    : GET "/"
// PARAMS   : None
// BODY     : None
// RESPONSE : User object or Unauthorized error if not authenticated
router.get('/', verifyToken, getUser)

// DESC     : Get the profile information for the currently authenticated user
// ROUTE    : GET "/user/profile"
// PARAMS   : None
// BODY     : None
// RESPONSE : User profile object or Unauthorized error if not authenticated
router.get('/profile', verifyToken, getProfile)

// DESC     : Get user information for a specific user by their ID
// ROUTE    : GET "/:userId"
// PARAMS   : userId (String) - The ID of the intended user
// BODY     : None
// RESPONSE : User object for the specified user or error message
router.get('/:userId', verifyToken, getUser)

router.delete('/delete', verifyToken, deleteLoggedInUser)

// DESC     : Update username, display name, and bio of a single user
// ROUTE    : PATCH "/posting/:userId"
// PARAMS   : UserId of intended user
// BODY     : username, name, bio
//            (Can be both or either, optional)
// RESPONSE : Process succeeded or Failed
router.patch('/edit',verifyToken, updateUser)

router.delete('/admin/:userId', verifyToken, verifyAdmin, deleteUser)


module.exports = router