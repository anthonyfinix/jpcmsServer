const mongoose = require('mongoose');
const baseFields = require('../model/base');
const serviceSchema = new mongoose.Schema({
    ...baseFields,
    customerName: { type: String, required: true },
    serialNumber: { type: Number, required: true, unique: true },
    customerMobileNumber: { type: Number },
    model: { type: String, required: true },
    issues: { type: String, required: true },
    brand: { type: String, required: true },
    status: { type: Boolean, required: true },
    amount: { type: Number, required: true },
    receivedDate: { type: Date, required: true, default: new Date() },
    returnedDate: { type: Date, required: true, default: new Date() },
    detailedDescription: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, required: true }
}, { versionKey: false });
const Service = mongoose.model("Service", serviceSchema);
exports.schema = serviceSchema