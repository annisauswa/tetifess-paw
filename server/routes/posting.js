const express = require('express')
const router = express.Router()
const { createPosting, deletePosting } = require('../controller/posting')

router.post('/:userId', createPosting)
router.delete('/:postId', deletePosting)

module.exports = router