  //--------------------- //
 // Create Connection DB // 
// -------------------- //


//Require Module MySql 
var mysql = require('mysql');


//Define Data Connection DB 
var dbconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rest"
});


//Connect DB 
dbconnection.connect(function(err){

    if(err){
      console.log(`error connecting ${err.stack}`);
      return;
    }

    console.log(`connected as id ${dbconnection.threadId}`);

});


//Export 
module.exports = dbconnection;


