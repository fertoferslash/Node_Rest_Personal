//Require Express Router 
const router = require('express').Router();

//Require DBEmpresa
const DBProducto = require('../../querys/sql_producto');

//Define Route 
router.get('/' , (req , res) => {

    DBProducto.getProducto().then(results => {
        console.log(`result ${JSON.stringify(results)}`);
        res.send(results);
    })

    .catch(function(err){
        console.log("Promise rejection error: " + err);
    })

});

//Export 
module.exports = router;

