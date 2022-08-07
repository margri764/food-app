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
    return statusBanner= !statusBanner;
  }

  getBannerLogin( ){
    return  this.loginBanner;
  }


}
