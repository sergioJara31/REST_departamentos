const express= require('express');
const peopleRoutes= require("./person.router");
const depRoutes = require('./departaments.router')

function routerApi(app){
    const routes = express.Router();
    app.use("/api/v1",routes); /* http://localhost:3030/api/v1 */
    routes.use("/people",peopleRoutes ); /* http://localhost:3030/api/v1/people */
    routes.use('/departaments',depRoutes);
}

module.exports = routerApi;



