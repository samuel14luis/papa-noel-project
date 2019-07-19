import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http:HttpClient) { }
  API_URI='http://localhost:3000/api/sales/categories/get/list/';
  APi_URI2='http://localhost:3000/api/sales/categories/delete/';
   getcategorias(){
    return this.http.get(this.API_URI);
   }
   deleteCategorias(id:String){
    return this.http.get(this.APi_URI2+id);
   }
}
