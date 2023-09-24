const express = require('express')
const router = express.Router()
const { createUser, getUser, updateUserBio, deleteUser } = require("../controller/user")

router.get('/', getUser)
router.post('/', createUser)
router.put('/:userId', updateUserBio)
router.delete('/:userId', deleteUser);

module.exports = router;