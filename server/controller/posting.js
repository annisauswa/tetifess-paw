const Posting = require('../model/posting')
const User = require('../model/user')

const readPosting  = async (req, res) => {
    const postId = req.params.postId;
    const {ascending} = req.query;

    try {
        if (postId.length != 12) {
            return res.status(400).json({ message: 'Post ID invalid'})
        }

        if (postId){
            const post = await Posting.findById(postId)
                .populate({path:'userId', select:'_id username name'})
                .populate({path:'likes', select:'_id username',  model: User})
            
            if (!post){
                return res.status(404).json({ message: 'Post not found' })
            }
            return res.json(post)
        } else {
            let sortDirection = 'desc';

            if (ascending === 'true') {
                sortDirection = 'asc';
            }

            try{
                const getPosts = await Posting.find()
                    .sort({timestamp: sortDirection})
                    .populate({path:'userId', select:'_id username name'})
                    .populate({path:'likes', select:'_id username',  model: User})
        
                if (getPosts.length === 0) {
                    res.status(404).json({ message: 'No posts found' });
                } else {
                    res.json(getPosts);
                }
            } catch(err){
                res.json({err})
                res.status(500).json({ message: 'Internal server error' })
            } 
        }
    } catch (err) {
        res.status(500).json({ message: 'Insert post ID' })
    }
}

const createPosting = async (req, res) => {
    const userId = req.user.id
    const {  text, image, timestamp } = req.body

    try{
        const posting = await Posting.create({userId, text, image, timestamp})
        res.status(200).json(posting)
    } catch(err){
        res.json({err})
        res.status(400).json({ error: err.message })
    }
}

const searchPosting = async (req, res) => {
    const {param} = req.query

    try {
        const getPosts = await Posting.find({
            $or: [
                {username : {$regex: param, $options: 'i'}},
                {text: {$regex: param, $options: 'i'}}
            ]
        })
        .populate({path:'userId', select:'_id username name'})
        .populate({path:'likes', select:'_id username',  model: User})

        if (getPosts.length === 0) {
            res.status(404).json({ message: 'No posts found' })
        } else {
            res.json(getPosts)
        }
    } catch (err) {
        res.json(err.message)
    }
}

const editPosting = async (req, res) => {
    const postId = req.params.postId
    const userId = req.user.id
    const message = req.body

    try {
        if (postId.length != 12) {
            return res.status(400).json({ message: 'Post ID invalid'})
        }

        const editedPost = await Posting.findByIdAndUpdate(postId, { $set: message}, {new: true}).populate({path:'userId', select:'_id username name'})

        if(!editedPost){
            res.status(404).json({ message: 'Post not found' })
        } else{
            if (editedPost.userId._id != userId) {
                return res.status(401).json({ message: 'Unauthorized' })
            } else {
                res.json(editedPost);
            }
        }
    } catch (err) {
        res.json(err.message)
    }
}

const deletePosting = async (req, res) => {
    const postId = req.params.postId;

    try {
        if (postId.length != 12) {
            return res.status(400).json({ message: 'Post ID invalid'})
        }

        const deletedPosting = await Posting.findByIdAndDelete(postId);

        if (!deletedPosting) {
            return res.status(404).json({ error: 'Posting not found' });
        }

        res.status(200).json({ message: 'Posting deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
}

const likePost = async(req, res) => {
    const userId = req.user.id
    console.log(userId)
    const postId = req.params.postId

    try{
        const posting = await Posting.findById(postId)
        const user = await User.findById(userId)

        if(!posting){
            return res.status(404).json({ message: 'Post not found' })
        }

        const likesIndex = posting.likes.findIndex((id) => id === String(userId))
        const postingIndex = user.likedPostings.findIndex((id) => id === String(postId))
        if(likesIndex === -1 && postingIndex === -1){
            posting.likes.push(userId)
            posting.likes_count++
            user.likedPostings.push(postId)
        } else {
            posting.likes = posting.likes.filter((id) => id !== String(userId))
            posting.likes_count--
            user.likedPostings = user.likedPostings.filter((id) => id !== String(postId))
        }

        await posting.save()
        await user.save()
        res.json(posting)
    } catch(err){
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    readPosting,
    createPosting,
    searchPosting,
    editPosting, 
    deletePosting,
    likePost
}