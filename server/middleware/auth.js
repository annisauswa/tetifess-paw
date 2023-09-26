const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }
    try{
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        req.user = verified
        next()
    } catch(err){
        res.status(400).json({message: 'Invalid token'})
    }
}

module.exports = { verifyToken }