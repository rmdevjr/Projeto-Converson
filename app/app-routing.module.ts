import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealComponent } from './real/real.component';
import { DolarComponent } from './dolar/dolar.component';
import { EuroComponent } from './euro/euro.component';


const routes: Routes = [
  {path:"real", component:RealComponent},
  {path:"dolar", component:DolarComponent},
  {path:"euro", component:EuroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
