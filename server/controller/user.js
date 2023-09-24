const User = require('../model/user')

const registerUser = async (req, res) => {
    const { username, password, name, bio } = req.body
    const date_created = Date.now()
    try{
        // check if username already taken
        const checkUsername = await User.findOne({username})
        if(checkUsername) {
            return res.status(400).json({error: 'Username already taken'})
        }

        // registered successfully when username is awailable
        const user = await User.create({username, password, name, bio, date_created})
        res.status(200).json(user)
    } catch(err){
        res.status(400).json({ error: err.message })
    }
}

const getUser = async (req, res) => {
    try{
        const users = await User.find()
        res.json(users)
    } catch(err){
        res.json({err})
        res.status(500).json({ message: 'Internal server error' })
    }
}

module.exports = {
    registerUser,
    getUser
}