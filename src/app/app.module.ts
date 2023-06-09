import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BedacsComponent } from './bedacs/bedacs.component';
import { SleepwearComponent } from './sleepwear/sleepwear.component';
import { SleepgadgetComponent } from './sleepgadget/sleepgadget.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { BedacsitemsComponent } from './bedacsitems/bedacsitems.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatBadgeModule} from '@angular/material/badge';
import { CartComponent } from './cart/cart.component';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

const routes: Routes = [ 
  { path: 'home', component: HomeComponent, children:[{ path: 'bditems', component: BedacsitemsComponent }] },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'bedacc', component: BedacsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BedacsComponent,
    SleepwearComponent,
    SleepgadgetComponent,
    BedacsitemsComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatButtonModule, MatTooltipModule, MatIconModule,MatToolbarModule,MatBadgeModule,MatSidenavModule,NgIf,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
