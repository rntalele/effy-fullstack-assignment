const {User} = require('../models');

const createUser = async (userBody)=>{
    let user = User.create(userBody);
    return user;
}

module.exports = {
    createUser
}