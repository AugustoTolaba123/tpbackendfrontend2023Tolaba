import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  urlbase:string="http://localhost:3000/api/"

  constructor(private _http: HttpClient) { }


  getTickets():Observable<any>{
    let httpOption = {
       headers: new HttpHeaders({
          
       }),
       params: new HttpParams()
    }
 return this._http.get(this.urlbase+"ticket",httpOption)
}

deleteTicket(ide:string):Observable<any>{
  let httpOption = {
     headers: new HttpHeaders({
        
     }),
     params: new HttpParams()
  }
return this._http.delete(this.urlbase+"ticket/"+ide,httpOption)
}

getTicketsxcategoria(categoriaEspectador:string):Observable<any>{
  let httpOption = {
     headers: new HttpHeaders({
        
     }),
     params: new HttpParams()
  }
return this._http.get(this.urlbase+"ticket/"+categoriaEspectador,httpOption)
}


}
