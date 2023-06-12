import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos!: Array<Producto>;
  producto!: Producto;

  constructor(private productoService: ProductoService,
    private router: Router) {
    this.productos = new Array<Producto>();
    this.cargarProductos();
    this.producto = new Producto();
   }

  ngOnInit(): void {
  }
 
  cargarProductos(){
    this.productoService.getProductos().subscribe(
         result => {
           let unProducto:Producto = new Producto();  
           result.forEach((element:any) => {
             Object.assign(unProducto,element);
             this.productos.push(unProducto);
             unProducto = new Producto();
            });
             console.log(result) 
         },
         error => {

         }
    )
 }



 agreagarProducto(){
  this.router.navigate(["producto-form",0])
}


}
