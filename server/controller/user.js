const User = require('../model/user')
const Posting = require('../model/posting')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const cookieParser = require('cookie-parser')

const registerUser = async (req, res) => {
    const { username, password, name, bio } = req.body
    const date_created = Date.now()
    try{
        // check if username already taken
        const checkUsername = await User.findOne({username})
        if(checkUsername) {
            return res.status(400).json({error: 'Username already taken'})
        }

        // check if password length is meet the requirement
        if(password.length < 6 || password.length > 12) {
            return res.status(400).json({error: 'Password must be 6-12 characters'})
        }

        // registered successfully when username is awailable
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User.create({
            username,
            password: hashedPassword,
            name,
            bio,
            dateCreated: date_created})
        res.status(200).json(user)
    } catch(err){
        res.status(400).json({ error: err.message })
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body

    try{
        const user = await User.findOne({username})

        if(!user){
            return res.status(400).json({error: 'User not found'})
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch){
            return res.status(400).json({error: 'Invalid password'})
        }

        const accessToken = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.status(200)
            .cookie(
                'token', accessToken, {
                    httpOnly: true,
                    secure: true
                })
            .json({
                message: 'Login success',
                token: accessToken,
                user: {
                    id: user._id,
                    username: user.username,
                    name: user.name,
                    bio: user.bio,
                    dateCreated: user.dateCreated,
                    dateEdited: user.dateEdited
                }
            })
    } catch(err){
        res.status(400).json({ error: err.message })
    }
}

const logoutUser = async (req, res) => {
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({message: 'No user is logged in'})
    }
    try{
        res.status(200)
            .clearCookie('token')
            .json({message: 'Logout success'})
    }catch(err){
        res.status(400).json({ error: err.message })
    }
}

const getProfile = async (req, res) => {
    const userId = req.user.id

    try{
        const users = await User.findById(userId)
            .populate({path:'likedPostings', select:'_id userId text', model: Posting, populate: {path: 'userId', select: 'username'}})
            
        if (!users){
            return res.status(404).json({ message: 'User not found' })
        }
        return res.json(users)
    }catch(err){
        res.status(400).json({ error: err.message })
    }
}

const getUser = async (req, res) => {
    const userId = req.params.userId;

    try{
        if (userId){
            const users = await User.findById(userId)
            .populate({path:'likedPostings', select:'userId text', model: Posting, populate: {path: 'userId', select: 'username'}})
            
            if (!users){
                return res.status(404).json({ message: 'User not found' })
            }
            return res.json(users)
        } else {
            try{
                const users = await User.find()
                .populate({path:'likedPostings', select:'_id userId text', model: Posting, populate: {path: 'userId', select: 'username'}})
                res.json(users)
            } catch(err){
                res.json({err})
                res.status(500).json({ message: 'Internal server error' })
            } 
        }
    } catch(err){
        res.status(500).json({ message: 'Insert user ID' })
    }

}

const updateUser = async (req, res) => {
    const userId = req.params.userId
    const { username, name, bio } = req.body;
    try {
        if (username == null && name == null && bio == null){
            return res.status(200).json({ message: "Nothing to update"  });
        } else {
            if (username != null) {
                const existingUser = await User.findOne({ username: username });
                
                if (existingUser && String(existingUser._id) !== String(userId)) {
                    return res.status(400).json({ message: "Username exists, insert new one." });
                }
            }
            const updatedUser = await User.findByIdAndUpdate(userId, {"$set":{ username: username, name: name, bio: bio, dateEdited: Date.now()}});

            if (!updatedUser) {
                return res.status(404).json({ error: "User not found" });
            }

            res.status(200).json({ message: "Update successful"  });
        }
    } catch (err) {
        res.json({err})
        res.status(500).json({ message: 'Internal server error' })
    }
}

const deleteUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Delete all posts associated with the user
        await Posting.deleteMany({ userId: userId });

        // Delete the user
        await User.findByIdAndDelete(userId);

        res.status(200).json({ message: 'User and associated posts deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = {
    registerUser,
    getUser,
    updateUser,
    deleteUser,
    loginUser,
    logoutUser,
    getProfile
}