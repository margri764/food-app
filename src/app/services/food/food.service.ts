import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class FoodService {


hamburger : number= 0;
fries : number= 0;
coca : number = 0;
icecream : number = 0;
total : number = 0;


fastFoodArray: any=[];

// get fastFood(){
//   return this.fastFoodArray;
// }  
  constructor(private http : HttpClient) { }





  getFastFood(){

  }


  // http://localhost:3000/additional
}
