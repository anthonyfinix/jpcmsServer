const router = require('express').Router();
const user = require('../user');
const service = require('../services');
const company = require('../company');
const loginGuard = require('../middleware/loginGuard');
const getCompanyDb = require('../middleware/getCompanyDb');

router.use('/user', user);
router.use('/company', loginGuard, company);
router.use('/service', loginGuard, getCompanyDb, service);

module.exports = router;