

const {userService} = require('../services');

const createUser = async (req,res)=>{
    try {
        let data = await userService.createUser(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

const getAllUsers = async (req,res)=>{
    try {
        let data = await userService.getAllUsers();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const getUserById = async (req,res)=>{
    try {
        const {id} = req.params;
        let data = await userService.getUserById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const updateUser = async (req,res) => {
    try {
        const {id} = req.params;
        let data = await userService.updateUser(id,req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deleteUser = async (req,res) => {
    try {
        const {id} = req.params;
        let data = await userService.deleteUser(id,req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

const deactivateUser = async (req,res) => {
    try {
        const {id} = req.params;
        await userService.deactivateUser(id,req.body);
        res.status(200).json({message:'User Deactivated Successfuly'});
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    deactivateUser
}