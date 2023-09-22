const express = require("express")
const router = express.Router()
const User = require('../model/user')

router.get('/', async (req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    } catch(err){
        res.json({err})
        res.status(500).json({ message: 'Internal server error' })
    }
})

router.post('/', async (req,res)=>{
    const { username, name, bio } = req.body
    try{
        const user = await User.create({username, name, bio})
        res.status(200).json(user)
    } catch(err){
        res.json({err})
        res.status(400).json({ error: err.message })
    }
})

module.exports = router;