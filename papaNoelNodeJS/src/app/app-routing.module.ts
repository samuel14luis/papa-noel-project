import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './papaNoel/home/home.component';
import { EstPedidoComponent } from './papaNoel/est-pedido/est-pedido.component';
import { LisComprasComponent } from './papaNoel/lis-compras/lis-compras.component';
import { LisFavoritosComponent } from './papaNoel/lis-favoritos/lis-favoritos.component';
import { EditPerfilComponent } from './papaNoel/edit-perfil/edit-perfil.component';

const routes: Routes = [
  {path:'', component:HomeComponent },
  {path:'EstPedidoComponent', component:EstPedidoComponent },
  {path:'LisComprasComponent', component:LisComprasComponent },
  {path:'', component:LisFavoritosComponent },
  {path:'', component:EditPerfilComponent },
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
  EditPerfilComponent ]
