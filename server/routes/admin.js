const express = require('express')
const router = express.Router()

const { deleteUser, updateUser, giveAdminRole, takeAdminRole, getUsers, deletePosting, editPosting } = require('../controller/admin')

router.get('/', getUsers)
router.delete('/:userId', deleteUser)
router.patch('/:userId', updateUser)
router.delete('/posting/:postId', deletePosting)
router.patch('/posting/:postId', editPosting)
router.patch('/give/:userId', giveAdminRole)
router.patch('/take/:userId', takeAdminRole)

module.exports = router