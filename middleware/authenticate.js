const { User } = require('../user/modal');

const jwt = require('jsonwebtoken');
const authenticate = async (req, _, next) => {
    let token = req.headers["authorization"];
    if (token) {
        try {
            let payload = jwt.verify(token.split(' ')[1], 'secret');
            let user = await global.mainDb.models.User.findOne({ username: payload.username });
            if (user) req.user = user;
        } catch (e) {
            console.log(e);
        }
    }
    next()
}

module.exports = authenticate;