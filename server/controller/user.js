const User = require('../model/user')

const createUser = async (req, res) => {
    const { username, name, bio } = req.body
    try{
        const user = await User.create({username, name, bio})
        res.status(200).json(user)
    } catch(err){
        res.json({err})
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

const updateUser = async (req, res) => {
    const userId = req.params.userId
    const { name, bio } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, {"$set":{ name: name, bio: bio, date_edited: Date.now()}});

        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "Update successful"  });
    } catch (err) {
        res.json({err})
        res.status(500).json({ message: 'Internal server error' })
    }
}


module.exports = {
    createUser,
    getUser,
    updateUser
}