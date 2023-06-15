import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  accion!:string; 
  ticket!: Ticket;
  espectadores!:Array<Espectador>;
  constructor(private activatedRoute: ActivatedRoute,
    private ticketService: TicketService, private router: Router) {
      this.ticket = new Ticket();
      this.espectadores = new Array<Espectador>();
     }

  ngOnInit(): void { 
    this.activatedRoute.params.subscribe (params => {
      if (params['id'] == "0"){
        this.accion = "new";
        this.cargarEspectadores();
      }
      else {
        this.accion = "update";
        this.cargarEspectadores();
        this.cargarTicket(params['id']);
      }
      }
    )

  }

 
 

  cargarEspectadores(){
    this.ticketService.getEspectadores().subscribe(
      result =>{
        let unEspectador = new Espectador();
        result.forEach((element:any) =>{
           Object.assign(unEspectador,element);
           this.espectadores.push(unEspectador)
           unEspectador = new Espectador();
          });     
      },
      error =>{
          
      }
    )
  }

  guardarTicket(){
    this.ticketService.createTicket(this.ticket).subscribe(
      (result:any) =>{
          if(result.status == 1){
             alert(result.msg);
          }
      },
       error => {
        alert(error.msg)
       }
     )
     this.router.navigate(["punto3"])
  }


  cargarTicket(id:string){
    this.ticketService.getTicket(id).subscribe(
      result =>{
        console.log(result);
        Object.assign(this.ticket,result);
        this.ticket.espectador = this.espectadores.find(a => (a._id == this.ticket.espectador._id))!;
        console.log(this.ticket);
       },
      error =>{

      }
    )
    
  }


  actualizarTicket(){

  }

  



}
