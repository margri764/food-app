import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
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
              private authservice : AuthService
              ) {
    
  }
  
  ngOnInit(): void {
    
    this.router.navigateByUrl('start');
    this.changeBannerStatus();
  }
  
  changeBannerStatus(){
    this.login=this.authservice.getBannerLogin();
    console.log('login desde app:', this.login)
  }

  openDialog() {
    this.dialog.open(PopusComponent, {
     height: '400px',
     panelClass:"custom-modalbox",
   });
  }

}
