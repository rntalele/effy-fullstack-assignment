const {companyService} = require('../services');


const createCompany = async (req,res)=>{
    try {
        let data = await companyService.createCompany(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

const getAllCompanies = async (req,res)=>{
    try {
        let data = await companyService.getAllCompanies();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

const getCompanyById = async (req,res)=>{
    try {
        let data = await companyService.getCompanyById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

const updateCompany = async (req,res)=>{
    try {
        let data = await companyService.updateCompany(req.params.id,req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

const deleteCompany = async (req,res)=>{
    try {
        let data = await companyService.deleteCompany(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

const addUserToCompany = async (req,res)=>{
    try {
        let data = await companyService.addUser(req.params.id,req.body.userid);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

const deleteUserFromCompany = async (req,res)=>{
    try {
        let data = await companyService.deleteUser(req.params.id,req.body.userid);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

module.exports = {
    createCompany,
    getAllCompanies,
    getCompanyById,
    updateCompany,
    deleteCompany,
    addUserToCompany,
    deleteUserFromCompany
}