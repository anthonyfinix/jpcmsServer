const { schema:ServiceSchema } = require('./services/model');
module.exports = (db) => {
    db.model("Service", ServiceSchema)
    return db;
}