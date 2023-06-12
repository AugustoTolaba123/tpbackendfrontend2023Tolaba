const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

//recupera transacciones
transaccionCtrl.getTransacciones = async (req, res) => {
    //manejando concepto de filtros
    let criteria = {}
     if((req.query.monedaOrigen != null) && (req.query.monedaOrigen != "")){
        criteria.monedaOrigen = req.query.monedaOrigen;
     }
    var transacciones = await Transaccion.find(criteria);
res.json(transacciones);
}

//crea transaccion
transaccionCtrl.createTransaccion = async (req, res) => {
 console.log(req.body)
    var transaccion = new Transaccion(req.body);
try {
await transaccion.save();
transaccion.cantidadDestino = transaccion.cantidadOrigen * transaccion.tasaConversion;

    // Guardar la transacción actualizada en la base de datos
    await transaccion.save();

res.json({
'status': '1',
'msg': 'Transaccion guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}

//recupera un producto
transaccionCtrl.getTransaccion = async (req, res) => {
    const emailCliente = req.params.emailCliente;
    const transaccion = await Transaccion.find({emailCliente: emailCliente});
res.json(transaccion);
}


module.exports = transaccionCtrl;