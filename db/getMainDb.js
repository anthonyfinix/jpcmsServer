const mongoose = require("mongoose");
const { companySchema } = require("../company/model");
const config = require('../config');
const { userSchema } = require('../user/modal');
const getMainDb = async () => {
    let dbConnection = await mongoose.createConnection(encodeURI(`${config.MONGODB_MAIN_HOST}/${config.MONGODB_MAIN_DB_NAME}?ssl=false`));
    dbConnection.model("User", userSchema);
    dbConnection.model("Company", companySchema);
    return dbConnection;
}
module.exports = getMainDb;