const express = require('express')
const router = express.Router()
const { deleteUser, updateUser, getUsers, deletePosting, editPosting } = require('../controller/admin')

router.get('/', getUsers)
router.delete('/:userId', deleteUser)
router.patch('/:userId', updateUser)
router.delete('/posting/:postId', deletePosting)
router.patch('/posting/:postId', editPosting)

module.exports = router