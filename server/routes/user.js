const express = require('express')
const router = express.Router()
const { registerUser, getUser, updateUserBio, deteleUser } = require("../controller/user")

router.get('/', getUser)
router.get('/:userId', getUser)
router.post('/', createUser)
router.post('/', registerUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser);

module.exports = router;