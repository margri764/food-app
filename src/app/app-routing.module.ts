import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/pages/home/home/home.component';
import { OfferComponent } from './shared/pages/offer/offer/offer.component';
import { StartComponent } from './shared/pages/start/start/start.component';

const routes: Routes = [

  {
    path: 'start',
    component: StartComponent
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
