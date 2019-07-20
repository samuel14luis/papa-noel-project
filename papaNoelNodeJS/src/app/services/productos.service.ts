import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  API_URI='http://localhost:3000/api/products/get/by/';
  API_URI2='http://localhost:3000/api/products/cart/add/';
   getproductosid(id:String){
    return this.http.get(this.API_URI+id);
   }
   getinsertaracesta(){
    return this.http.get(this.API_URI2);
   }
}
