import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class DivisaService {
  urlbase:string="http://localhost:3000/api/"
  constructor(private _http:HttpClient) { }

  public conversor(fromvalue:number,fromtype:string, totype:string):Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
    
    'X-RapidAPI-Host': 'currency-converter13.p.rapidapi.com',
    'X-RapidAPI-Key': '84e7c2b4afmshb78dc416d76db42p17eeb3jsn845fc88bafa1',
    }),
    }
    return this._http.get("https://currency-converter13.p.rapidapi.com/convert?from="+fromtype+"&to="+totype+"&amount="+fromvalue,httpOptions);
    }
   
    
      createDivisa(transaccion:Transaccion):Observable<any>{
          let httpOption = {
            headers: new HttpHeaders({
                "Content-type": "application/json"
            }),
            params: new HttpParams()
         }
         let body = JSON.stringify(transaccion);
        return this._http.post(this.urlbase+"transaccion",body,httpOption)
        
        }

        getTransacciones():Observable<any>{
          let httpOption = {
             headers: new HttpHeaders({
                
             }),
             params: new HttpParams()
          }
       return this._http.get(this.urlbase+"transaccion/",httpOption)
      }

     


      getTransaccionesxfiltro(monedaorigen:string,monedadestino:string):Observable<any>{
        let httpOption = {
           headers: new HttpHeaders({
              
           }),
           params: new HttpParams()
        }
     return this._http.get(this.urlbase+"transaccion/?monedaOrigen="+monedaorigen+"&monedaDestino="+monedadestino,httpOption)
    }

   


    }
