import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedacsComponent } from './bedacs/bedacs.component';
import { BedacsitemsComponent } from './bedacsitems/bedacsitems.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'bditems', component: BedacsitemsComponent}, 
  {path: 'cart', component: CartComponent}, 
  { path: 'bedacc', component: BedacsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
