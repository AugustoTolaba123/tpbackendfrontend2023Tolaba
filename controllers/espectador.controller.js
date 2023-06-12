const Espectador = require('../models/espectador');
const espectadorCtrl = {}

//recupera productos
espectadorCtrl.getEspectadores = async (req, res) => {
    //manejando concepto de filtros
    let criteria = {}
     if((req.query.destacado != null) && (req.query.destacado != "")){
        criteria.destacado = req.query.destacado;
     }
    var espectadores = await Espectador.find(criteria);
res.json(espectadores);
}

//crea producto
espectadorCtrl.createEspectador = async (req, res) => {
 console.log(req.body)
    var espectador = new Espectador(req.body);
try {
await espectador.save();
res.json({
'status': '1',
'msg': 'Espectador guardado.'})
} catch (error) {
res.status(400).json({
'status': '0',
'msg': 'Error procesando operacion.'})
}
}

//recupera un producto
espectadorCtrl.getEspectador = async (req, res) => {
const espectador = await Espectador.findById(req.params.id);
res.json(espectador);
}

module.exports = espectadorCtrl;