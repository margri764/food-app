import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessComponent } from './shared/message/success/success/success.component';

// Components
import { DeliveryComponent } from './shared/pages/delivery/delivery.component';
import { HamburgerComponent } from './shared/pages/hamburger/hamburger/hamburger.component';
import { HomeComponent } from './shared/pages/home/home/home.component';
import { OfferComponent } from './shared/pages/offer/offer/offer.component';
import { ShoppingCartComponent } from './shared/pages/shopping-cart/shopping-cart/shopping-cart.component';
import { StartComponent } from './shared/pages/start/start/start.component';

const routes: Routes = [

  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  },
  {
    path: 'fast-food-h',
    component: HamburgerComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'delivery',
    component: DeliveryComponent
  },
  {
    path: 'offers',
    component: OfferComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
