import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  tickets!:Array<Ticket>;
  tickets2!:Array<Ticket>;
   categoria!:string;
  constructor(private ticketService: TicketService, private router: Router) { 
    
    this.tickets = new Array<Ticket>(); 
    this.tickets2 = new Array<Ticket>(); 
    this.cargarTickets();
  }

  ngOnInit(): void {
  }

  cargarTickets(){
    this.ticketService.getTickets().subscribe(
         result => {
           let unTicket:Ticket = new Ticket();  
           result.forEach((element:any) => {
             Object.assign(unTicket,element);
             this.tickets.push(unTicket);
             unTicket = new Ticket();
            });
             console.log(result) 
         },
         error => {

         }
    )
 }


 deleteTicket(ticket:Ticket){
 
  this.ticketService.deleteTicket(ticket._id).subscribe(
   
    (result:any) =>{
        if(result.status == 1){
           alert(result.msg);
           this.router.navigate(["punto3"])
        }
    },
     error => {
      alert(error.msg)
     }
   )
   this.router.navigate(["punto3"])
 }

 cargarTicketxcategoria(categoria:string){
  this.ticketService.getTicketsxcategoria(categoria).subscribe(
    result => {
      let unTicket:Ticket = new Ticket();  
      result.forEach((element:any) => {
        Object.assign(unTicket,element);
        this.tickets2.push(unTicket);
        unTicket = new Ticket();
       });
        console.log(result) 
    },
    error => {

    }
)
this.tickets2 = new Array<Ticket>(); 
 }


 agregarTicket(){
  this.router.navigate(["ticket-form",0])
}

modificarTicket(ticket:Ticket){
  this.router.navigate(["ticket-form",ticket._id])
}



}
