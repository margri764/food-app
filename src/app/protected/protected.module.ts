import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditFoodComponent } from './pages/edit-food/edit-food.component';
import { EditOffersComponent } from './pages/edit-offers/edit-offers.component';
import { EditPublicityComponent } from './pages/edit-publicity/edit-publicity.component';
import { EditDialogComponent } from './pages/edit-dialog/edit-dialog.component';
import { EditCustomersComponent } from './pages/edit-customers/edit-customers.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';



@NgModule({
  declarations: [
    DashboardComponent,
    EditFoodComponent,
    EditOffersComponent,
    EditPublicityComponent,
    EditDialogComponent,
    EditCustomersComponent,
    AnalyticsComponent

  ],
    imports: [
    CommonModule,
    ProtectedRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class ProtectedModule { }
