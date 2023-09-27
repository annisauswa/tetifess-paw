const express = require('express')
const router = express.Router()
const { registerUser, getUser, updateUser, deleteUser, loginUser, logoutUser } = require("../controller/user")
const { verifyToken } = require('../middleware/auth')

// DESC     : Register a new user
// ROUTE    : POST "/"
// PARAMS   : None
// BODY     : JSON object containing user registration data: (username, password, name, bio)
// RESPONSE : User object or error message
router.post('/', registerUser)

// DESC     : Log in an existing user
// ROUTE    : POST "/login"
// PARAMS   : None
// BODY     : JSON object containing user login credentials(username, password)
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

// DESC     : Get user information for a specific user by their ID
// ROUTE    : GET "/:userId"
// PARAMS   : userId (String) - The ID of the intended user
// BODY     : None
// RESPONSE : User object for the specified user or error message
router.get('/:userId', verifyToken, getUser)

// DESC     : Update username, display name, and bio of a single user
// ROUTE    : PATCH "/:userId"
// PARAMS   : userId (String) - The ID of the user to update
// BODY     : JSON object containing user data to update (username, name, bio; can be any combination, optional)
// RESPONSE : Success message or error message
router.patch('/:userId', verifyToken, updateUser)

// DESC     : Delete a user account by their ID
// ROUTE    : DELETE "/:userId"
// PARAMS   : userId (String) - The ID of the user to delete
// BODY     : None
// RESPONSE : Success message or error message
router.delete('/:userId', verifyToken, deleteUser)

module.exports = router;