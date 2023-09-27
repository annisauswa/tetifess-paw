const express = require('express')
const router = express.Router()
const { registerUser, getUser, updateUser, getProfile, deleteUser, loginUser, logoutUser } = require("../controller/user")
const { verifyToken } = require('../middleware/auth')

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.get('/', verifyToken, getUser)
router.get('/profile', verifyToken, getProfile)
router.get('/:userId', verifyToken, getUser)

// DESC     : Update username, display name, and bio of a single user
// ROUTE    : PATCH "/posting/:userId"
// PARAMS   : UserId of intended user
// BODY     : username, name, bio
//            (Can be both or either, optional)
// RESPONSE : Process succeeded or Failed
router.patch('/:userId',verifyToken, updateUser)

router.delete('/:userId', verifyToken, deleteUser)

module.exports = router;