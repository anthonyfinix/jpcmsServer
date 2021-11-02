const { spawn } = require('child_process');
const config = require('../config');
const handleSeed = async () => {
    const { User } = global.mainDb.models;
    let admin;
    if (!await User.findOne({ username: "admin" })) {
        console.log("No User found seeding...");
        await new Promise((resolve, _) => {
            let dbUri  = `${config.MONGODB_MAIN_HOST}/${config.MONGODB_MAIN_DB_NAME}`;
            if (process.env.NODE_ENV === "development") dbUri + "?ssl=false";
            let child = spawn('node', ['./db/seeders/user/seeder.js', 'dbId', dbUri]);
            child.stdout.on('data', data => console.log(Buffer.from(data).toString()));
            child.stderr.on('data', data => console.error(Buffer.from(data).toString()))
            child.on('exit', () => resolve())
        })
        admin = await User.findOne({ username: "admin" });
    }
}
module.exports = handleSeed;