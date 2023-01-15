const {Company} = require('../models');

const createCompany = async (companyBody) => {
    let company = await Company.create(companyBody);
    return company;
}



module.exports = {
    createCompany
}