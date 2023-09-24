const express = require('express')
const router = express.Router()
const { registerUser, getUser, updateUserBio } = require("../controller/user")

router.get('/', getUser)
router.post('/', registerUser)
router.put('/:userId', updateUserBio)

module.exports = router;