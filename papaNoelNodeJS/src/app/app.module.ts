import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,  routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './papaNoel/menu/menu.component';
import { SlaiderComponent } from './papaNoel/home/slaider/slaider.component';
import { ProductosComponent } from './papaNoel/home/productos/productos.component';


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

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
