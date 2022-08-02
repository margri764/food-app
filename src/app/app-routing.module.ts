import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DeliveryComponent } from './shared/pages/delivery/delivery.component';
import { HomeComponent } from './shared/pages/home/home/home.component';
import { OfferComponent } from './shared/pages/offer/offer/offer.component';
import { StartComponent } from './shared/pages/start/start/start.component';

const routes: Routes = [

  {
    path: 'start',
    component: StartComponent
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
