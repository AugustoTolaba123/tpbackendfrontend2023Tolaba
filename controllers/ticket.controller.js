const Ticket = require('./../models/ticket')

ticketCtrl = {};

ticketCtrl.getTickets = async(req,res) => {
  let criteria = {}
     if((req.query.categoriaEspectador != null) && (req.query.categoriaEspectador != ""
        
         )){
        criteria.categoriaEspectador = req.query.categoriaEspectador;
        
     } 
  
  var tickets = await Ticket.find(criteria).populate("espectador");
     res.json(tickets);

}


ticketCtrl.createTicket = async (req, res) => {
    
  var ticket = new Ticket(req.body);
   try {
   await ticket.save();
   res.status(200).json({
   'status': '1',
   'msg': 'Ticket guardado.'})
   } catch (error) {
   res.status(400).json({
   'status': '0',
   'msg': 'Error procesando operacion.'})
   }
   }

   ticketCtrl.getTicketd = async (req, res) => {
    const ticket = await Ticket.findById(req.params.id).populate("espectador");
    res.json(ticket);
    }

   ticketCtrl.getTicket = async (req, res) => {
    const categoriaEspectador = req.params.categoriaEspectador;
    const ticket = await Ticket.find({categoriaEspectador}).populate("espectador");
    res.json(ticket);
   }

   

    //eliminar un producto
ticketCtrl.deleteTicket = async (req, res)=>{
    try {
    await Ticket.deleteOne({_id: req.params.id});
    res.json({
    status: '1',
    msg: 'Ticket removed'})
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    })
    }
    }

//editar ticket
ticketCtrl.editTicket = async (req, res) => {
  const vagente = new Ticket(req.body);
  try {
  //const ticket = await Ticket.findById(req.params.id).populate("espectador");
  
  await Ticket.updateOne({_id: req.body._id}, vagente).populate("espectador");
    res.json({
    'status': '1',
    'msg': 'Ticket updated'
    })
    } catch (error) {
    res.status(400).json({
    'status': '0',
    'msg': 'Error procesando la operacion'
    })
    }
    }
  module.exports = ticketCtrl;