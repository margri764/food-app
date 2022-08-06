import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DeliveryComponent } from './shared/pages/delivery/delivery.component';
import { HamburgerComponent } from './shared/pages/hamburger/hamburger.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { OfferComponent } from './shared/pages/offer/offer.component';
import { ShoppingCartComponent } from './shared/pages/shopping-cart/shopping-cart.component';
import { StartComponent } from './shared/pages/start/start.component';
import { SuccessComponent } from './shared/pages/success/success.component';

const routes: Routes = [
  
  {
    path: 'start', component: StartComponent
  },
  {
    path: 'cart', component: ShoppingCartComponent
  },
  {
    path: 'fast-food-h', component: HamburgerComponent
  },
  {
    path: 'success', component: SuccessComponent
  },
  {
    path: 'delivery', component: DeliveryComponent
  },
  {
    path: 'offers', component: OfferComponent
  },
  {
    path: 'home',  component: HomeComponent
  },
  {
    path: '**',    redirectTo: 'page-404'
  },
  
  {
    path: "", redirectTo: "home", pathMatch: 'full'
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
