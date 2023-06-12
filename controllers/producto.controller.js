const Producto = require('../models/producto');
const productoCtrl = {}

//recupera productos
productoCtrl.getProductos = async (req, res) => {
    //manejando concepto de filtros
    let criteria = {}
     if((req.query.destacado != null) && (req.query.destacado != "")){
        criteria.destacado = req.query.destacado;
     }
    var productos = await Producto.find(criteria);
res.json(productos);
}

//crea producto
productoCtrl.createProducto = async (req, res) => {
 console.log(req.body)
    var producto = new Producto(req.body);
try {
await producto.save();
res.json({
'status': '1',
'msg': 'Producto guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}

//recupera un producto
productoCtrl.getProducto = async (req, res) => {
//const producto = await Producto.findById(req.params.id);
//res.json(producto);
const producto = await Producto.find({destacado: true });
  res.json(producto);

}


//edita producto
productoCtrl.editProducto = async (req, res) => {
const vproducto = new Producto(req.body);
try {
await Producto.updateOne({_id: req.body._id}, vproducto);
res.json({
'status': '1',
'msg': 'Producto updated'
})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando la operacion'
})
}
}


//eliminar un producto
productoCtrl.deleteProducto = async (req, res)=>{
try {
await Producto.deleteOne({_id: req.params.id});
res.json({
status: '1',
msg: 'Producto removed'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando la operacion'
})
}
}
module.exports = productoCtrl;