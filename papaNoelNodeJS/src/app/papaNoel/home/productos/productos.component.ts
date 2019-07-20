import { Component, OnInit } from '@angular/core';
import {CategoriasService } from '../../../services/categorias.service';
import {ProductosService} from '../../../services/productos.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
 
 
  categorias:any=[];
  productos:any=[];
  constructor(private categoriaService:CategoriasService,private productosService:ProductosService) { }

  ngOnInit() {
    this.categoriaService.getcategorias().subscribe(
      res => {
        this.categorias=res;
            
      },
      err=>  console.log(err)
    )
   
    
  }
  saveproductos(){
    this.productosService.getinsertaracesta().subscribe(
      res => {
        this.productos=res;
        console.log(res);
            
      },
      err=>  console.log(err)
    )
  }

  mostrarproductos(id:String){
     this.productosService.getproductosid(id).subscribe(
      res => {
        this.productos=res;
        console.log(res);
            
      },
      err=>  console.log(err)
     )
  }
  holamundo(id:String){
   alert("Su id es bebecito"+id);
  }
  
  carouselOptions = {
  
    margin: 40,
    responsiveClass: true,
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 7,
      },
      1500: {
        items: 8,
      }
    }
  };
  


}
