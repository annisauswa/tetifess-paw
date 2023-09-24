const Posting = require('../model/posting')

const readPosting  = async (req, res) => {
    console.log('get all')
    try {
        const getPosts = await Posting.find(); // .populate('user_id')
        
        if (getPosts.length === 0) {
            res.status(404).json({ message: 'No posts found' });
        } else {
            res.json(getPosts);
        }
    } catch (err) {
        res.json(err.message);
        console.log(err.message);
    }
}

const createPosting = async (req, res) => {
    const userId = req.params.userId
    const {  message, dateTime } = req.body
    try{
        const posting = await Posting.create({userId, message, dateTime})
        res.status(200).json(posting)
    } catch(err){
        res.json({err})
        res.status(400).json({ error: err.message })
    }
}

const searchPosting = async (req, res) => {
    const {param} = req.query;
    console.log(param)
    try {
        const getPosts = await Posting.find({
            $or: [
                {username : {$regex: param, $options: 'i'}},
                {text: {$regex: param, $options: 'i'}}
            ]
        }); // .populate('user_id')

        if (getPosts.length === 0) {
            res.status(404).json({ message: 'No posts found' });
        } else {
            res.json(getPosts);
        }
    } catch (err) {
        res.json(err.message);
        console.log(err.message);
    }
}

const editPosting = async (req, res) => {
    const {id} = req.params;
    const edits = req.body;
    console.log(edits);

    try {
        const editedPost = await Posting.findByIdAndUpdate(id, { $set: edits}, {new: true}); // .populate('user_id')

        if (!editedPost) {
            res.status(404).json({ message: 'Post not found' });
        } else {
            res.json(editedPost);
        }
    } catch (err) {
        res.json(err.message);
        console.log(err.message);
    }
}

module.exports = {
    readPosting,
    createPosting,
    searchPosting,
    editPosting
}