const express = require('express');

const router = express.Router();

const {companyController} = require('../../controllers');

router.post('/',companyController.createCompany);

module.exports = router;