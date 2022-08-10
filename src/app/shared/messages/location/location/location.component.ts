import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from 'src/app/shared/pages/success/success.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(
              private dialog : MatDialog,
               private _bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit(): void {
  }

  // para probar el success
openDialog() {
  this.dialog.open(SuccessComponent, {
  //  maxHeight: '50vh',
   height: '400px',
   panelClass:"custom-modalbox",
 });
}

closeBottomSheet() {
  this._bottomSheet.ngOnDestroy();
}

}
