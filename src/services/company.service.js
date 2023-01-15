const {Company} = require('../models');
const {User} = require('../models');

const createCompany = async (companyBody) => {
    let company = await Company.create(companyBody);
    return company;
}

const getAllCompanies = async ()=>{
    let companies = await Company.find({});
    return companies;
}

const getCompanyById = async (id)=>{
    let company = await Company.findById(id);
    return company;
}

const updateCompany = async (id,update) => {
    let company = await Company.findOneAndUpdate({_id:id},update,{new:true});
    return company;
}

const deleteCompany = async(id) => {
    let company = await Company.findByIdAndDelete(id);
    return company;
}

const addUser = async (companyId,userId) => {
    
    let company = await Company.findById(companyId);
    let user = await User.findById(userId);
    let ifUserExist = company.users.find((user)=> user._id.equals(userId));
    if(!ifUserExist){
        company.users.push(user);
        await company.save();
        return {"message":"User added successfully"};
    }
    throw new Error("User Already Exists");
    
}

const deleteUser = async (companyId,userId) => {
    let company = await Company.findById(companyId);
    let index = company.users.findIndex((user)=>user._id.equals(userId));
    company.users.splice(index,1);
    await company.save();
    return {message:'User Deleted Successfully'}
}


module.exports = {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany,
    addUser,
    deleteUser
}