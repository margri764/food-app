import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from '../../message/success/success/success.component';
import { LocationComponent } from '../../messages/location/location/location.component';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  constructor(
            private _bottomSheet: MatBottomSheet,
            private dialog : MatDialog
) { }

ngOnInit(): void {

  setTimeout(()=>{
    this.openDialog();
      }, 2000)
}

openBottomSheet() {
this._bottomSheet.open(LocationComponent);
}

openDialog() {
  this.dialog.open(LocationComponent, {
  //  maxHeight: '50vh',
   height: '400px',
   panelClass:"custom-modalbox",
 });
}



}

