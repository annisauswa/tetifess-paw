const express = require('express')
const router = express.Router()
const { registerUser, getUser, updateUser, deleteUser, loginUser } = require("../controller/user")

router.get('/', getUser)
router.get('/:userId', getUser)
router.post('/', registerUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)
router.post('/login', loginUser)

module.exports = router;