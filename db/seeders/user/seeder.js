require('dotenv').config()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const users = require('./users');
const { userSchema } = require('../../../user/modal');
let dbUri = `${process.env.MONGODB_MAIN_HOST}/${process.env.MONGODB_MAIN_DB_NAME}`;
if (process.env.NODE_ENV === "development") dbUri+"?ssl=false";
for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i] === "dbUri") {
        dbUri = process.argv[i + 1];
    }
}

(async () => {
    let db = await mongoose.createConnection(dbUri);
    let User = db.model('User', userSchema);
    for (user of users) {
        try {
            user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT_ROUND));
            await new User(user).save()
        } catch (e) {
            console.log(e)
            break;
        }
    }
    return process.exit(0)
})()