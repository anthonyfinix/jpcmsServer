const getDb = require('../company/getDb');
const getCompany = require('../company/service/getCompany');
module.exports = (req, res, next) => {
    // getCompany({ createdBy: req.user._id }).then(response => {
    //     if (response && response.length > 0) req.user.companies = response;
    // })
    next();
}