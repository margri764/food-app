import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { FoodService } from './services/food/food.service';
import { LocationComponent } from './shared/messages/location/location/location.component';
import { PopusComponent } from './shared/pages/popus/popus.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'food-app';

  
  login:boolean=true;
  // en el oninit iria un servicio para cambiar el estado del login!!!!
  
  constructor( 
               public router: Router,
               private dialog : MatDialog,
               private authservice : AuthService,
               private _bottomSheet: MatBottomSheet,
               private foodService : FoodService
    ) {
    
  }
  
  ngOnInit(): void {
    
    this.router.navigateByUrl('start');

    setTimeout(()=>{
      // this.openDialog();

    },10000)
  }
  
  changeBannerStatus(){
    this.login=this.authservice.getBannerLogin();
    console.log('login desde app:', this.login)
  }

  openDialog() {
    this.dialog.open(PopusComponent, {
     panelClass:"custom-modalbox",
   });
  }



}  








