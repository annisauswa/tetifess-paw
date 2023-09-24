const Posting = require('../model/posting')

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
        });

        if (getPosts.length === 0) {
            res.status(404).json({ message: 'No posts found' });
        } else {
            res.json(getPosts);
        }
    } catch (err) {
        console.log(err.message);
    }
}

module.exports = {
    createPosting,
    searchPosting
}