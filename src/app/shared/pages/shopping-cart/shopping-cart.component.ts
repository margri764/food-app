import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @ViewChild ("top" , {static: true} ) top! : ElementRef;

  qHamburger:number = 0 ;
  qFries : number = 0;
  qCoca : number = 0;
  qIcecream : number = 0;
  qTotal:number = 0;
  element : any; 

  value : any;


  constructor(
              private foodService : FoodService
  ) { }

  ngOnInit(): void {
    this.element = this.top.nativeElement;

    setTimeout( () => {

    this.element.scrollIntoView(
      { alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      // this.scrolled = true;
      }, 0);


    this.qHamburger = this.foodService.hamburger;
    this.qFries = this.foodService.fries;
    this.qCoca = this.foodService.coca;
    this.qIcecream = this.foodService.icecream;
    this.qTotal = this.foodService.total;

  }
  
  totalPurchase(){
  
   return this.qTotal=(this.qHamburger* 700) + (this.qFries*230) + (this.qCoca*180) + (this.qIcecream*310);
  }
  
    increment(value : string ){
  
  
      switch(value){
        
        
        case 'hamburger':
              this.qHamburger = this.qHamburger+1;
              this.totalPurchase();
        break;
        case 'fries':
               this.qFries = this.qFries+1;
               this.totalPurchase();
        break;
        case 'coca':
               this.qCoca = this.qCoca+1;
               this.totalPurchase();
        break;
        case 'icecream':
               this.qIcecream = this.qIcecream+1;
               this.totalPurchase();
        break;
      }
    
  
      // this.cart.updateQuantity(this.fastFood,this.value)
    }
  
    decrement( value : string){
  
      switch(value){
        case 'qhamburger':
              (this.qHamburger >=2) ? this.qHamburger = this.qHamburger-1 : "";
              this.totalPurchase();
        break;
        case 'fries':
              (this.qFries >=1) ? this.qFries = this.qFries-1: "";
              this.totalPurchase();
        break;
        case 'coca':
               (this.qCoca >=1) ? this.qCoca = this.qCoca-1: "";
              this.totalPurchase();
        break;
        case 'icecream':
               (this.qIcecream >=1) ? this.qIcecream = this.qIcecream-1 : "";
              this.totalPurchase();
        break
      }
  
  
    }
    
}


