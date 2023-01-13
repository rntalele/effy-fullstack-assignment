const {User} = require('../models');

const createUser = async (userBody)=>{
    let user = User.create(userBody);
    return user;
}

const getAllUsers = async()=>{
    let users = await User.find({});
    return users;
}

const getUserById = async (id)=>{
    let user = await User.findById(id);
    return user;
}

const updateUser = async (id,update)=>{
    let user = await User.findOneAndUpdate({_id:id},update,{new:true});
    return user;

}

const deleteUser = async(id) => {
    let user = await User.findByIdAndDelete(id);
    return user;
}

const deactivateUser = async(id) => {
    let user = await User.findById(id);
    user.active = false;
    await user.save();
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    deactivateUser
}