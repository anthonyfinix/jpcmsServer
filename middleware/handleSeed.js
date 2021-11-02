const { spawn } = require('child_process');
const config = require('../config');
const handleSeed = async () => {
    const { User } = global.mainDb.models;
    let admin;
    if (!await User.findOne({ username: "admin" })) {
        console.log("No User found seeding...");
        await new Promise((resolve, _) => {
            let child = spawn('node', ['./db/seeders/user/seeder.js', 'dbId', `${config.MONGODB_MAIN_HOST}/${config.MONGODB_MAIN_DB_NAME}?ssl=false`]);
            child.stdout.on('data', data => console.log(data));
            child.stderr.on('data', data => console.error(Buffer.from(data).toString()))
            child.on('exit', () => resolve())
        })
        admin = await User.findOne({ username: "admin" });
    }
}
module.exports = handleSeed;