const mongoose = require('mongoose');
exports.baseSchemaFields = {
    createdAt: { type: Date, required: true, default: new Date() }
}