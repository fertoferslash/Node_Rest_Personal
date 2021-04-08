  //--------------------- //
 // Create Connection DB // 
// -------------------- //


//Require Module MySql 
const mysql = require('mysql');


//Define Data Connection DB 
const dbconnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "rest"
});


//Connect DB 
dbconnection.connect(function(err){

    if(err){
      console.log(`Connection Failed ${err.stack}`);
      return;
    }

    console.log(`Connection Successful - IdConnect Is : ${dbconnection.threadId}`);

});


//Export 
module.exports = dbconnection


