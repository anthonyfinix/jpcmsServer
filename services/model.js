const mongoose = require('mongoose');
const baseFields = require('../model/base');
const schema = new mongoose.Schema({
    ...baseFields,
    customerName: { type: String },
    serialNumber: { type: Number },
    customerMobileNumber: { type: Number },
    model: { type: String },
    issues: { type: String },
    brand: { type: String },
    status: { type: Boolean },
    amount: { type: Number },
    receivedDate: { type: Date },
    returnedDate: { type: Date },
    detailedDescription: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, required: true }
},{ versionKey: false });
const Service = mongoose.model("Service", schema);
module.exports = Service