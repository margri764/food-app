import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/pages/header/header.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SliderComponent } from './shared/pages/slider/slider.component';
import { LocationComponent } from './shared/messages/location/location/location.component';
import { HamburgerComponent } from './shared/pages/hamburger/hamburger.component';
import { SuccessComponent } from './shared/pages/success/success.component';
import { ShoppingCartComponent } from './shared/pages/shopping-cart/shopping-cart.component';
import { DeliveryComponent } from './shared/pages/delivery/delivery.component';
import { MenuComponent } from './shared/pages/menu/menu.component';
import { FooterComponent } from './shared/pages/footer/footer.component';
import { OfferComponent } from './shared/pages/offer/offer.component';
import { MessageComponent } from './shared/pages/message/message.component';
import { PopusComponent } from './shared/pages/popus/popus.component';
import { StartComponent } from './shared/pages/start/start.component';
import { OrderComponent } from './shared/pages/order/order.component';

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
    HamburgerComponent,
    ShoppingCartComponent,
    OrderComponent
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
