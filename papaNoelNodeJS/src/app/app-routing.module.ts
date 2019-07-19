import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './papaNoel/home/home.component';
import { LisComprasComponent } from './papaNoel/lis-compras/lis-compras.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'LisComprasComponent', component: LisComprasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponent,
  LisComprasComponent];
