import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit, AfterViewInit {

  @ViewChild ("top" , {static: true} ) top! : ElementRef;
  element : any;


  value : number= 1;

  constructor(

  ) { }

  ngOnInit(): void {
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

 }


  increment( ){
    this.value= this.value+1;
  }

  decrement( ){
    if(this.value == 1){return;}
    this.value= this.value-1;
  }

  
}


