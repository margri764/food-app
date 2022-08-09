import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginBanner:boolean=true;
 
  constructor() { }

  
  setBannerLogin( statusBanner: boolean){
    this.loginBanner= statusBanner;
    console.log('logion desde setBannerService',this.loginBanner)
    return this.loginBanner;
  }

  getBannerLogin( ){
    return  this.loginBanner;
  }


}
