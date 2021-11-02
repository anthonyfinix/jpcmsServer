const getDb = require('../company/getDb');
const setModel = require('../setModels');
const Company = require('../company/model');
module.exports = async (req, res, next) => {
    if (!req.query.company) return res.json({ error: "require company" });
    let company = await global.mainDb.models.Company.findOne({ createdBy: req.user._id, name: req.query.company });
    if (!company) return res.json({ error: "no company found" });
    let dbConnection;
    dbConnection = global.companyDbs.find(cachedDbConnection => cachedDbConnection.company._id === company._id);
    if (!dbConnection) {
        let newDbConnection = await getDb(company._id);
        dbConnection = setModel(newDbConnection);
        req.companyDb = dbConnection;
        global.companyDbs.push({ company, db: dbConnection });
    };
    return next();
}