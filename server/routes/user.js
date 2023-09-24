const express = require('express')
const router = express.Router()
const { createUser, getUser, updateUserBio } = require("../controller/user")

router.get('/', getUser)
router.post('/', createUser)
router.put('/:userId', updateUserBio)

module.exports = router;