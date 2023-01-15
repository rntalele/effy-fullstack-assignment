
const express = require('express');

const router = express.Router();

const userRoute = require('./user.route');

const companyRouter = require('./company.route');

router.use('/users',userRoute);

router.use('/companies',companyRouter);

module.exports = router;