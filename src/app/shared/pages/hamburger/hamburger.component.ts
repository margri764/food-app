import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Cart } from 'src/app/cart.model';
import { FoodService } from 'src/app/services/food/food.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit, AfterViewInit {

  @ViewChild ("top" , {static: true} ) top! : ElementRef;
  element : any;
  fastFoodArray: any;
  hamburger : number = 1;
  fries : number= 0;
  coca : number = 0;
  icecream: number = 0;
  total:number = 0; 

  fastFood = 
    {
      id: "hamburguesa",
      name: "Hamburguesa Simple",
      price: "700"  
    }
    // {
    //   id: "pizza",
    //   name: "Pizza Shop",
    //   price: "500"  
    // }

  

  value : number= 1;

  constructor(  private foodService : FoodService,
                public cart : Cart

  ) { }

  ngOnInit(): void {


    this.totalPurchase();
  }

  ngAfterViewInit(): void {

    this.element = this.top.nativeElement;

    setTimeout( () => {

    this.element.scrollIntoView(
      { alignToTop: true,
        behavior: "smooth",
        block: "center",
      });
      // this.scrolled = true;
      }, 0);

      this.cart.addLine(this.fastFood)

 }

 async share() {
  const image = await fetch("../../../../assets/food1.png");
  const blob = await image.blob();
  const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
  navigator.share({ text: 'some_text', files: [file] } as ShareData);
  
}
 

totalPurchase(){
  this.foodService.hamburger=this.hamburger;
  this.foodService.fries=this.fries;
  this.foodService.coca=this.coca;
  this.foodService.icecream=this.icecream;
  
  this.total=(this.hamburger* 700) + (this.fries*230) + (this.coca*180) + (this.icecream*310);
  this.foodService.total=this.total;
  return this.total; 
}

  increment(value : string ){


    switch(value){
      
      
      case 'hamburger':
            this.hamburger = this.hamburger+1;
            this.totalPurchase();
      break;
      case 'fries':
             this.fries = this.fries+1;
             this.totalPurchase();
      break;
      case 'coca':
             this.coca = this.coca+1;
             this.totalPurchase();
      break;
      case 'icecream':
             this.icecream = this.icecream+1;
             this.totalPurchase();
      break;
    }
  

    // this.cart.updateQuantity(this.fastFood,this.value)
  }

  decrement( value : string){

    switch(value){
      case 'hamburger':
            (this.hamburger >=2) ? this.hamburger = this.hamburger-1 : "";
            this.totalPurchase();
      break;
      case 'fries':
            (this.fries >=1) ? this.fries = this.fries-1: "";
            this.totalPurchase();
      break;
      case 'coca':
             (this.coca >=1) ? this.coca = this.coca-1: "";
            this.totalPurchase();
      break;
      case 'icecream':
             (this.icecream >=1) ? this.icecream = this.icecream-1 : "";
            this.totalPurchase();
      break
    }


  }

  
}


