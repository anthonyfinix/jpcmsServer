const Company = require('../../company/model');
module.exports = (filter) => {
    let filterOpt = {};
    if (filter) filterOpt = filter
    return Company.find(filterOpt);
}