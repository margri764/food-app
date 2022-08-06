import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

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


