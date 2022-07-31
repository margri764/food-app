import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  value : number= 1;

  constructor(
    private _bottomSheet: MatBottomSheet,

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

  
  closeBottomSheet() {
    this._bottomSheet.ngOnDestroy();
  }

}
