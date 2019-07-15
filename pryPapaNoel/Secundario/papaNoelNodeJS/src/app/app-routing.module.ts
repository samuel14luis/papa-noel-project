import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './papaNoel/home/home.component';
import { EstPedidoComponent } from './papaNoel/est-pedido/est-pedido.component';
import { LisComprasComponent } from './papaNoel/lis-compras/lis-compras.component';
import { LisFavoritosComponent } from './papaNoel/lis-favoritos/lis-favoritos.component';
import { EditPerfilComponent } from './papaNoel/edit-perfil/edit-perfil.component';
import { ElectrodomesticoComponent } from './papaNoel/home/electrodomestico/electrodomestico.component';
import { LibrosComponent } from './papaNoel/home/libros/libros.component';
import { MochilasComponent } from './papaNoel/home/mochilas/mochilas.component';
import { UtilesComponent } from './papaNoel/home/utiles/utiles.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'EstPedidoComponent', component: EstPedidoComponent },
  {path: 'LisComprasComponent', component: LisComprasComponent },
  {path: '', component: LisFavoritosComponent },
  {path: '', component: EditPerfilComponent },
  {path: 'home', component: HomeComponent, children :
  [{path: 'ElectrodomesticoComponent', component: ElectrodomesticoComponent },
    {path: 'LibrosComponent', component: LibrosComponent },
    {path: 'MochilasComponent', component: MochilasComponent },
    {path: 'UtilesComponent', component: UtilesComponent },
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent,
  EstPedidoComponent,
  LisComprasComponent,
  LisFavoritosComponent,
  EditPerfilComponent,
  ElectrodomesticoComponent,
  LibrosComponent,
  MochilasComponent,
  UtilesComponent
];
