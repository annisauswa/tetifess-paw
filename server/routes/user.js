const express = require('express')
const router = express.Router()
const { registerUser, getUser, updateUser, deleteUser } = require("../controller/user")

router.get('/', getUser)
router.get('/:userId', getUser)
router.post('/', registerUser)
router.patch('/:userId', updateUser)
router.delete('/:userId', deleteUser)

module.exports = router;