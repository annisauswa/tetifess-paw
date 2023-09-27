const express = require('express')
const router = express.Router()
const { registerUser, getUser, updateUser, getProfile, deleteUser, loginUser, logoutUser } = require("../controller/user")
const { verifyToken, verifyAdmin } = require('../middleware/auth')

router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.get('/', verifyToken, verifyAdmin, getUser)
router.get('/profile', verifyToken, getProfile)
router.get('/:userId', verifyToken, verifyAdmin, getUser)

// DESC     : Update username, display name, and bio of a single user
// ROUTE    : PATCH "/posting/:userId"
// PARAMS   : UserId of intended user
// BODY     : username, name, bio
//            (Can be both or either, optional)
// RESPONSE : Process succeeded or Failed
router.patch('/:userId',verifyToken, verifyAdmin, updateUser)

router.delete('/:userId', verifyToken, verifyAdmin, deleteUser)

module.exports = router