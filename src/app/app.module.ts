import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/pages/menu/menu/menu.component';
import { HomeComponent } from './shared/pages/home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/pages/header/header/header.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './shared/pages/footer/footer/footer.component';
import { OfferComponent } from './shared/pages/offer/offer/offer.component';
import { MessageComponent } from './shared/pages/message/message/message.component';
import { PopusComponent } from './shared/pages/popus/popus/popus.component';
import { SliderComponent } from './shared/pages/slider/slider/slider.component';
import { StartComponent } from './shared/pages/start/start/start.component';
import { DeliveryComponent } from './shared/pages/delivery/delivery.component';
import { LocationComponent } from './shared/messages/location/location/location.component';
import { SuccessComponent } from './shared/message/success/success/success.component';
import { HamburgerComponent } from './shared/pages/hamburger/hamburger/hamburger.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OfferComponent,
    MessageComponent,
    PopusComponent,
    SliderComponent,
    StartComponent,
    DeliveryComponent,
    LocationComponent,
    SuccessComponent,
    HamburgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
