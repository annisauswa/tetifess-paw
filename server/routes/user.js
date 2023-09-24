const express = require('express')
const router = express.Router()
const { createUser, getUser, updateUser } = require("../controller/user")

router.get('/', getUser)
router.post('/', createUser)
router.put('/:userId', updateUser)

module.exports = router;