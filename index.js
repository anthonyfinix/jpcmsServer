const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const service = require('./services');
const user = require('./user')
const authenticate = require('./middleware/authenticate');
const PORT = process.env.PORT || 3001
const init = async () => {
    try {
        await mongoose.connect(encodeURI("mongodb+srv://anthonyfinix:anthonyfinix123@cluster0.e5vqq.mongodb.net/jptechsolution?retryWrites=true&w=majority"));
        app.use(express.json())
        app.use(authenticate)
        app.use(cors())
        app.use('/',(req,res)=>{
            res.send("Hold up")
        })
        app.use('/user', user)
        app.use('/service', service)
        app.listen(PORT, () => {
            console.log(`hello server ${PORT}`)
        })
    } catch (e) {
        console.log(e);
    }
}




init()




