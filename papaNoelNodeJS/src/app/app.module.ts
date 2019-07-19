import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule,  routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './papaNoel/menu/menu.component';
import { SlaiderComponent } from './papaNoel/home/slaider/slaider.component';
import { ProductosComponent } from './papaNoel/home/productos/productos.component';
import { OwlModule } from 'ngx-owl-carousel';

import {CategoriasService} from './services/categorias.service';
import {ProductosService} from './services/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents,
    SlaiderComponent,
    ProductosComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OwlModule
  ],
  providers: [
    CategoriasService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
