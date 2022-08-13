import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DeliveryComponent } from './shared/pages/delivery/delivery.component';
import { GeoComponent } from './shared/pages/geo/geo.component';
import { HamburgerComponent } from './shared/pages/hamburger/hamburger.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { OfferComponent } from './shared/pages/offer/offer.component';
import { OrderComponent } from './shared/pages/order/order.component';
import { ProfileComponent } from './shared/pages/profile/profile.component';
import { RegisterComponent } from './shared/pages/register/register.component';
import { SettingsComponent } from './shared/pages/settings/settings.component';
import { ShoppingCartComponent } from './shared/pages/shopping-cart/shopping-cart.component';
import { StartComponent } from './shared/pages/start/start.component';
import { SuccessComponent } from './shared/pages/success/success.component';

const routes: Routes = [
  
  
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'start', component: StartComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: 'order', component: OrderComponent
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
    path: 'geo', component: GeoComponent
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
    path: "", redirectTo: "home", pathMatch: 'full'
  },
  {
    path: '**',    redirectTo: 'home'
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot( routes ,{useHash: true})], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
