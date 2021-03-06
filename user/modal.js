const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    'firstName':{type:String,required:true},
    'lastName':{type:String,required:true},
    'username': { type: String, unique: true, required: true },
    'password': { type: String, required: true },
}, { versionKey: false });
const User = mongoose.model("User", schema);
module.exports = User