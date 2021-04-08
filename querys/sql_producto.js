//Require DBConnection 
const dbconnection = require('../db/db');


//Define Query DB 
let getProducto = () => {

        //Promise
        return new Promise ((resolve , reject) => {

            //Define Query 
            let sql = 'SELECT * from producto'
            
            //Execute Query 
            dbconnection.query(sql , (err,results) => {

                //Condition 
                if(err){
                    return reject(err);
                }
                else{
                    return resolve(results);
                }

            })
            
        });
}


//Export 
module.exports = {
    getProducto
};