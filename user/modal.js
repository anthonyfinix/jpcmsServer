const mongoose = require('mongoose');
const baseFields = require('../model/base');
const schema = new mongoose.Schema({
    ...baseFields,
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profile: { type: String },
}, { versionKey: false });
const User = mongoose.model("User", schema);
module.exports = {
    User,
    userSchema:schema
}