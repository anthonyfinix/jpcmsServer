const express = require('express');
const cors = require('cors');
const app = express();
const authenticate = require('./middleware/authenticate');
const path = require('path');
const config = require('./config');
const handleSeed = require('./middleware/handleSeed');
const getMainDb = require('./db/getMainDb');
const apiV1 = require('./apiV1/');

const init = async () => {
    try {
        global.companyDbs = []
        global.mainDb = await getMainDb();
        handleSeed()
        app.use(express.static(path.join(__dirname, "public")))
        app.use(express.json());
        app.use(authenticate);
        app.use(cors());
        app.use('/api', apiV1)
        app.all('/*', (_, res) => res.redirect('/'));
        app.listen(config.PORT, () => console.log(`hello server ${config.PORT}`));
    } catch (e) {
        console.log(e);
    }
}
init()




