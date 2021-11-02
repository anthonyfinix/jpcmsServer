const mongoose = require('mongoose');
const baseFields = require('../model/base');
const schema = new mongoose.Schema({
    ...baseFields,
    name: { type: String, required: true },
    password: { type: String, required: true },
    logo: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, required: true }

}, { versionKey: false });
const Company = mongoose.model("Company", schema);
module.exports = { model: Company, companySchema: schema }