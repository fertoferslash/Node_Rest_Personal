//Require Sql_Query 
const sql_empresa = require('./querys/sql_empresa');

//Require Express Module 
const express = require('express');

//Require BodyParser
const bodyparser = require("body-parser");

//Require Cors 
const cors = require("cors");

//Require Port Config 
require('./config/config');

//Require DBConnection 
require('./db/db');

//Define Router 
const router = express.Router();

//Consume Express Module
const app = express();

//Consume BodyParser
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

//Consume Cors 
app.use(cors());

//Consume Router 
app.use('/api', router);


//Define Route 
router.route('/empresa').get((req, res) => {
    sql_empresa.getEmpresa().then(results => {
        console.log(`result ${JSON.stringify(results)}`)
        res.send(results);
    })
    .catch(function(err){
        console.log("Promise rejection error: " + err);
    })
});



//Consume Port 
app.listen(process.env.PORT , ()=> {
    console.log("Escuchando el puerto :" , process.env.PORT);
});





/* 
PROBANDO ROUTE MAPING 

//Require ApiRouter (Manejador de Rutas)
const apiRouter = require('./routes/api');

//Consume ApiRouter (Manejador de Rutas) 
app.use('/api', apiRouter) 
//Todas las rutas que entren en mi servidor con '/api' lo gestionara mi fichero ApiRouter  

 */
