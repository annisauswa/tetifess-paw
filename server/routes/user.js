const express = require('express')
const router = express.Router()
const { registerUser, getUser } = require("../controller/user")

router.get('/', getUser)
router.post('/', registerUser)

module.exports = router;