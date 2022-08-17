import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OfferComponent } from '../shared/pages/offer/offer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditFoodComponent } from './pages/edit-food/edit-food.component';
import { EditOffersComponent } from './pages/edit-offers/edit-offers.component';
import { EditPublicityComponent } from './pages/edit-publicity/edit-publicity.component';
import { EditCustomersComponent } from './pages/edit-customers/edit-customers.component';




const rutas: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'edit-food', component: EditFoodComponent },
      { path: 'edit-offers', component: EditOffersComponent },
      { path: 'edit-publicity', component: EditPublicityComponent },
      { path: 'edit-customer', component: EditCustomersComponent },

      // { path: 'editar/:id', component: AgregarComponent },
      // { path: 'buscar', component: BuscarComponent },
      // { path: ':id', component: HeroeComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class ProtectedRoutingModule { }
