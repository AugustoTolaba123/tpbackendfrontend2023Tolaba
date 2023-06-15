import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  producto!: Producto;
  constructor(private productoService: ProductoService,private router: Router) {
    this.producto = new Producto();
   }

  ngOnInit(): void {
  }
  guardarProducto(){
    this.productoService.createProducto(this.producto).subscribe(
      (result:any) =>{
          if(result.status == 1){
             alert(result.msg);
          }
      },
       error => {
        alert(error.msg)
       }
     )

     this.router.navigate(["producto"])
   }
}
