import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Cart } from './cart.model';
import { HomeComponent } from './shared/pages/home/home.component';
import { HeaderComponent } from './shared/pages/header/header.component';
import { MaterialModule } from './material/material.module';
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
import { MoreComponent } from './shared/pages/more/more.component';
import { ProfileComponent } from './shared/pages/profile/profile.component';
import { SettingsComponent } from './shared/pages/settings/settings.component';
import { BannerRegisterComponent } from './shared/pages/banner-register/banner-register.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { RegisterComponent } from './shared/pages/register/register.component';
import { GoogleRegisterComponent } from './shared/pages/messages/google-register/google-register.component';
import { GeoComponent } from './shared/pages/geo/geo.component';
import { PopLocationComponent } from './shared/pages/geo/pop-location/pop-location.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ProtectedModule } from './protected/protected.module';


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
    OrderComponent,
    MoreComponent,
    ProfileComponent,
    SettingsComponent,
    BannerRegisterComponent,
    LoginComponent,
    RegisterComponent,
    GoogleRegisterComponent,
    GeoComponent,
    PopLocationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    ReactiveFormsModule,
    ProtectedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })


  ],
  providers: [
    Cart
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
