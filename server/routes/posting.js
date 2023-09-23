const express = require('express')
const router = express.Router()
const { createPosting } = require('../controller/posting')

router.post('/:userId', createPosting)

module.exports = router