const express = require('express')
const router = express.Router()
const { registerUser, getUser, updateUserBio, deteleUser } = require("../controller/user")

router.get('/', getUser)
router.post('/', registerUser)
router.put('/:userId', updateUserBio)
router.delete('/:userId', deleteUser);

module.exports = router;