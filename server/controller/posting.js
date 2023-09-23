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

module.exports = {
    createPosting
}