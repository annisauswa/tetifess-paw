const Posting = require('../model/posting')

const createPosting = async (req, res) => {
    const userId = req.params.userId
    const {  text, timestamp } = req.body
    try{
        const posting = await Posting.create({userId, text, timestamp})
        res.status(200).json(posting)
    } catch(err){
        res.json({err})
        res.status(400).json({ error: err.message })
    }
}

const deletePosting = async (req, res) => {
    const postId = req.params.postId;

    try {
        const deletedPosting = await Posting.findByIdAndDelete(postId);

        if (!deletedPosting) {
            return res.status(404).json({ error: 'Posting not found' });
        }

        res.status(200).json({ message: 'Posting deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createPosting,
    deletePosting
}