//Require Express Router 
const router = require('express').Router();

//Require Empresa 
const apiEmpresaRouter = require('./api/empresa');

//Require Proveedor 
const apiProveedorRouter = require('./api/proveedor');

//Require Producto
const apiProductoRouter = require('./api/producto');


//Define Path Empresa
router.use('/empresa' , apiEmpresaRouter);

//Define Path Proveedor
router.use('/proveedor' , apiProveedorRouter);

//Define Path Producto
router.use('/producto' , apiProductoRouter);


//Export
module.exports = router;
