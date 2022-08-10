import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { LocationComponent } from '../../messages/location/location/location.component';

@Component({
  selector: 'app-popus',
  templateUrl: './popus.component.html',
  styleUrls: ['./popus.component.scss']
})
export class PopusComponent implements OnInit {

  constructor(
             public dialog : MatDialog,
             private _bottomSheet : MatBottomSheet
  ) { }

  ngOnInit(): void {
  }


  openBottomSheet() {
    this._bottomSheet.open(LocationComponent);
    }
  


}
