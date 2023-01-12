

const {userService} = require('../services');

const createUser = async (req,res)=>{
    try {
        let data = await userService.createUser(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

module.exports = {
    createUser
}