const getDb = require('../company/getDb');
const setModel = require('../setModels');
const dbPool = require('../dbPool');
const Company = require('../company/model');
module.exports = async (req, res, next) => {
    if (!req.query.company) return res.json({ error: "require company" });
    let company = await Company.findOne({ createdBy: req.user._id, name: req.query.company });
    if (!company) return res.json({ error: "no company found" });
    let dbConnection;
    dbConnection = dbPool.find(cachedDbConnection => cachedDbConnection.company._id === company._id);
    if (!dbConnection) {
        let newDbConnection = await getDb(company._id);
        dbConnection = setModel(newDbConnection);
        req.companyDb = dbConnection;
        dbPool.push({ company, db: dbConnection });
    };
    return next();
}