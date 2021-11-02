
require('dotenv').config();
const config = require('../../../config')
const mongoose = require('mongoose');
const setModels = require('../../../setModels');
const jobs = require('./jobs');
let dbId = "617696334a6baf7f139328ff";
let dbUri = `${config.MONGODB_MAIN_HOST}/${dbId}?ssl=false`;
for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === "dbUri") {
        dbUri = process.argv[i + 1];
    }
}
(async () => {
    let db = await mongoose.createConnection(dbUri);
    db.dropCollection('services');
    db = setModels(db);
    const { Service } = db.models;
    let index = 0;
    for (job of jobs) {
        job.createdBy = "6174d4984ce5e2b0db8f77a5";
        job.serialNumber = Math.floor((Math.random() * 1000)+index);
        try {
            let response = await new Service({ ...job }).save()
            console.log(response)
        } catch (e) {
            console.log(e)
            break;
        }
        index++
    }
    process.exit(0)
})()