const express = require('express')
const router = express.Router()
const { registerUser, getUser, updateUser, deleteUser, loginUser } = require("../controller/user")

router.get('/', getUser)
router.get('/:userId', getUser)
router.post('/', registerUser)

//DESC:     Function to update display name and bio of a single user. 
//ROUTE:    Domain followed up with "/:{userId of intended user}".
//PARAMS:   UserId of intended user.
//BODY:     New display name (name) and bio (bio) (Can be both or either, optional).
//RESPONSE: Process succeeded or Failed.  
router.patch('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.post('/login', loginUser)

module.exports = router;