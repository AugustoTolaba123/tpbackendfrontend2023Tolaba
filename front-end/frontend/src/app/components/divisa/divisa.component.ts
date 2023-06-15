import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/models/transaccion';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})
export class DivisaComponent implements OnInit {
  cantidad!:number;
  totype!:string;
  fromtype!:string;
  resultadoDivisa!:number;
  resultee!: string;
  validar: boolean=false;

  transaccion!: Transaccion;

  constructor(private divisaService: DivisaService,private router: Router) {
    this.transaccion = new Transaccion();
   }

  ngOnInit(): void {
  }

  convertir(){
    
    this.divisaService.conversor(this.cantidad,this.fromtype,this.totype).subscribe(
     resulte  => {
         console.log(resulte);
         this. resultadoDivisa= resulte.amount;
         this.resultee = resulte;
       },
     error =>   {
         
       }
     )
    this.validar = true;
    this.transaccion.cantidadOrigen = this.cantidad;
    this.transaccion.monedaOrigen = this.fromtype;
    this.transaccion.monedaDestino = this.totype;
    this.transaccion.emailCliente = "aa@aa";
    this.transaccion.tasaConversion = 0.855;
    this.transaccion.cantidadDestino = this.cantidad * this.transaccion.tasaConversion;
    this.divisaService.createDivisa(this.transaccion).subscribe(
      (result:any) =>{
          if(result.status == 1){
             alert(result.msg);
          }
      },
       error => {
        alert(error.msg)
       }
     )  
  
  }

  guardartransaccion(){
    this.transaccion.cantidadOrigen = this.cantidad;
    this.transaccion.monedaOrigen = this.fromtype;
    this.transaccion.monedaDestino = this.totype;
    this.transaccion.emailCliente = "aa@aa";
    this.transaccion.tasaConversion = 0.855;
    this.transaccion.cantidadDestino = this.cantidad * this.transaccion.tasaConversion;
    this.divisaService.createDivisa(this.transaccion).subscribe(
      (result:any) =>{
          if(result.status == 1){
             alert(result.msg);
          }
      },
       error => {
        alert(error.msg)
       }
     )
   }

   vertransaccion(){
     this.router.navigate(["transacciones-form",0])
  
   }



}
