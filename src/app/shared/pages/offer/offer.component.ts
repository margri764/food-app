import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MessageComponent } from '../message/message.component';


@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  constructor(
           private _bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit(): void {
  }

  openBottomSheet() {
    this._bottomSheet.open(MessageComponent);
  }


}




