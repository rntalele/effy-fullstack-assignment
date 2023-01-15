const express = require('express');

const router = express.Router();

const {companyController} = require('../../controllers');

router.get('/',companyController.getAllCompanies);

router.post('/',companyController.createCompany);

router.get('/:id',companyController.getCompanyById);

router.put('/:id',companyController.updateCompany);

router.delete('/:id',companyController.deleteCompany);

router.put('/add/:id',companyController.addUserToCompany);

router.put('/delete/:id',companyController.deleteUserFromCompany);



module.exports = router;