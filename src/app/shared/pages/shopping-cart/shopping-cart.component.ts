import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  value : number= 1;

  constructor(

  ) { }

  ngOnInit(): void {
  }

  increment( ){
    this.value= this.value+1;
  }

  decrement( ){
    if(this.value == 1){return;}
    this.value= this.value-1;
  }

  
}

