const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    'customerName': { type: String },
    'serialNumber': { type: Number },
    'customerMobileNumber': { type: Number },
    'model': { type: String },
    'issues': { type: String },
    "brand": { type: String },
    "status": { type: Boolean },
    "amount": { type: Number },
    "receivedDate": { type: Date },
    "returnedDate": { type: Date },
    "detailedDescription": { type: String }
});
const Service = mongoose.model("Service", schema);
module.exports = Service