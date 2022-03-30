const express = require('express');
const { mongoose } = require('mongoose');
const app = express();

const port = 3030;

const routerApi= require('./src/routes');

require('dotenv').config();

routerApi(app);

app.listen(port, ()=> console.log("active port",port));

app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECT)
    .then(()=>console.log("success conneciton tih mongo"))
    .catch(() => console.error('connection couldnt be established'));






