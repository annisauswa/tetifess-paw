const express = require('express')
const router = express.Router()
const { registerUser, getUser, updateUser, deleteUser, loginUser } = require("../controller/user")

router.get('/', getUser)
router.get('/:userId', getUser)
router.post('/', registerUser)

// DESC     : Update username, display name, and bio of a single user
// ROUTE    : PATCH "/posting/:userId"
// PARAMS   : UserId of intended user
// BODY     : username, name, bio
//            (Can be both or either, optional)
// RESPONSE : Process succeeded or Failed
router.patch('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.post('/login', loginUser)

module.exports = router;