import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlbase:string="http://localhost:3000/api/"
  constructor(private _http: HttpClient) { }
    destacado!:boolean;

  getProductos():Observable<any>{
    let httpOption = {
       headers: new HttpHeaders({
          
       }),
       params: new HttpParams()
    }
 return this._http.get(this.urlbase+"producto/destacado",httpOption)
}

createProducto(producto:Producto):Observable<any>{
  let httpOption = {
    headers: new HttpHeaders({
        "Content-type": "application/json"
    }),
    params: new HttpParams()
 }
 let body = JSON.stringify(producto);
return this._http.post(this.urlbase+"producto",body,httpOption)

}



}
