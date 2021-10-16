const mongoose = require('mongoose');
module.exports = async (id) => {
    return await mongoose.createConnection(`mongodb+srv://admin:admin@cluster0.akigj.mongodb.net/${id}?retryWrites=true&w=majority`, { maxPoolSize: 10 })
}