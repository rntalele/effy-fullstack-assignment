const {companyService} = require('../services');


const createCompany = async (req,res)=>{
    try {
        let data = await companyService.createCompany(req.body);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
    
}

module.exports = {
    createCompany
}