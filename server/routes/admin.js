const express = require('express')
const router = express.Router()

const { deleteUser, updateUser, giveAdminRole, takeAdminRole, deletePosting, editPosting, getUsers } = require('../controller/admin')

// DESC     : Get all user data
// ROUTE    : GET "/admin/"
// PARAMS   : None
// BODY     : None
// RESPONSE : Users object or error message
router.get('/', getUsers)

// DESC     : Delete user data
// ROUTE    : DELETE "/admin/:userId"
// PARAMS   : userId
// BODY     : None
// RESPONSE : message
router.delete('/:userId', deleteUser)

// DESC     : Update user data
// ROUTE    : PATCH "/admin/:userId"
// PARAMS   : userId
// BODY     : username name bio
// RESPONSE : User object or error message
router.patch('/:userId', updateUser)

// DESC     : Delete posting data
// ROUTE    : DELETE "/admin/:postId"
// PARAMS   : postId
// BODY     : None
// RESPONSE : message
router.delete('/posting/:postId', deletePosting)

// DESC     : Update posting data
// ROUTE    : PATCH "/admin/:postId"
// PARAMS   : postId
// BODY     : text
// RESPONSE : Posting object or error message
router.patch('/posting/:postId', editPosting)

// DESC     : Give admin role to user
// ROUTE    : PATCH "/admin/give/:userId"
// PARAMS   : userId
// BODY     : None (the role is set from controller)
// RESPONSE : Users object or error message
router.patch('/give/:userId', giveAdminRole)

// DESC     : Take admin role from user
// ROUTE    : PATCH "/admin/take/:userId"
// PARAMS   : userId
// BODY     : None (the role is set from controller)
// RESPONSE : Users object or error message
router.patch('/take/:userId', takeAdminRole)

module.exports = router