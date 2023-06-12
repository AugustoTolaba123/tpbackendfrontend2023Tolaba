import { Component, OnInit } from '@angular/core';
import { Transaccion } from 'src/app/models/transaccion';
import { DivisaService } from 'src/app/services/divisa.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styleUrls: ['./transaccion.component.css']
})
export class TransaccionComponent implements OnInit {
  transacciones!: Array<Transaccion>;
  transaccion!: Transaccion;
  transacciones2!: Array<Transaccion>;
  email!:string;
  constructor(private serviceTransaccion: DivisaService) { 
    this.transacciones = new Array<Transaccion>();
    this.cargarTransacciones();
    this.transaccion = new Transaccion();
   
    this.transacciones2 = new Array<Transaccion>();
  }

  ngOnInit(): void {
  }
  cargarTransacciones(){
    this.serviceTransaccion.getTransacciones().subscribe(
      result => {
        let unaTransaccion:Transaccion = new Transaccion();  
        result.forEach((element:any) => {
          Object.assign(unaTransaccion,element);
          this.transacciones.push(unaTransaccion);
          unaTransaccion = new Transaccion();
         });
          console.log(result) 
      },
      error => {

      }
 )

  }

  cargarTransaccionesxfiltro(){
     this.email = "martin@gmail.com"
    this.serviceTransaccion.getTransaccionesxfiltro(this.email).subscribe(
      result => {
        let unaTransaccion:Transaccion = new Transaccion();  
        result.forEach((element:any) => {
          Object.assign(unaTransaccion,element);
          this.transacciones2.push(unaTransaccion);
          unaTransaccion = new Transaccion();
         });
          console.log(result) 
      },
      error => {

      }
 )

  }









}
