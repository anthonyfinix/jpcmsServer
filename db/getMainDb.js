const mongoose = require("mongoose");
const { companySchema } = require("../company/model");
const config = require('../config');
const { userSchema } = require('../user/modal');
const getMainDb = async () => {
    let dbUri = `${config.MONGODB_MAIN_HOST}/${config.MONGODB_MAIN_DB_NAME}`;
    if (process.env.NODE_ENV === "development") dbUri + "?ssl=false";
    let dbConnection = await mongoose.createConnection(encodeURI(dbUri));
    dbConnection.on("error",(e)=>{
        throw e;
    })
    dbConnection.model("User", userSchema);
    dbConnection.model("Company", companySchema);
    return dbConnection;
}
module.exports = getMainDb;