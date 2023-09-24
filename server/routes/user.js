const express = require('express')
const router = express.Router()

const { createUser, getUser, updateUser, deleteUser } = require("../controller/user")

router.get('/', getUser)
router.post('/', createUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser);


module.exports = router;