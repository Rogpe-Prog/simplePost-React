const User = require('../models/model')

const getUser = async (req, res) => {
    try{
        const data = await User.find({})
        return res.json(data)
    }catch(e){
        res.status(500).send(e)
    }
}
const postUser = async (req, res) => {
    try{
        const data = await User.create(req.body)
        return res.json(data)
    }catch(e){
        res.status(400).send(e)
    }
    
}

module.exports = {
    getUser, postUser
}