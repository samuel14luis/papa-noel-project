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
  mostrarproductos(id:String){
     this.productosService.getproductosid(id).subscribe(
      res => {
        this.productos=res;
        console.log(res);
            
      },
      err=>  console.log(err)
     )
  }
  holamundo(){
   alert("Nuevo producto agregado bebecito");
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
  images = [
    {
      text: 'Everfresh Flowersre',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg'
    },
    {
      text: 'Festive Deer',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg'
    },
    {
      text: 'Morning Greens',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg'
    },
    {
      text: 'Bunch of Love',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg'
    },
    {
      text: 'Blue Clear',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg'
    },
    {
      text: 'Evening Clouds',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg'
    },
    {
      text: 'Fontains in Shadows',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg'
    },
    {
      text: 'Kites in the Sky',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg'
    },
    {
      text: 'Sun Streak',
      image: 'https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg'
    }
  ];


}
