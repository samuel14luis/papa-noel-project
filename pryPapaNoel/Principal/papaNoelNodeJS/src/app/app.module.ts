import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,  routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './papaNoel/menu/menu.component';
import { SlaiderComponent } from './papaNoel/home/slaider/slaider.component';
import { CategoriasComponent } from './papaNoel/home/categorias/categorias.component';
import { PiepaginaComponent } from './papaNoel/home/piepagina/piepagina.component';
import { ProelectrodomesticoComponent } from './papaNoel/home/proelectrodomestico/proelectrodomestico.component';
import { ProlibrosComponent } from './papaNoel/home/prolibros/prolibros.component';
import { PromochilasComponent } from './papaNoel/home/promochilas/promochilas.component';
import { ProutilesComponent } from './papaNoel/home/proutiles/proutiles.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents,
    SlaiderComponent,
    CategoriasComponent,
    PiepaginaComponent,
    ProelectrodomesticoComponent,
    ProlibrosComponent,
    PromochilasComponent,
    ProutilesComponent,
   
  ],
  imports: [

    BrowserModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
