import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LocationComponent } from '../../messages/location/location/location.component';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  constructor(
    private _bottomSheet: MatBottomSheet,
) { }

ngOnInit(): void {
}

openBottomSheet() {
this._bottomSheet.open(LocationComponent);
}


}

