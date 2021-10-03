const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const service = require('./services');
const user = require('./user')
const authenticate = require('./middleware/authenticate');
const path = require('path');
const loginGuard = require('./middleware/loginGuard');
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 8080
const init = async () => {
    try {
        await mongoose.connect(encodeURI(MONGO_URI));
        app.use(express.json())
        app.use(authenticate)
        app.use(cors())
        app.use(express.static(path.join(__dirname, "public")))
        app.get('/', (req, res) => {
            res.send("Hold up")
        })
        app.use('/user', user)
        app.use('/service', loginGuard, service)
        app.listen(PORT, () => {
            console.log(`hello server ${PORT}`)
        })
    } catch (e) {
        console.log(e);
    }
}
init()




