import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor(
            private _bottomSheet: MatBottomSheet,
  ) { }

  ngOnInit(): void {
  }

    
  closeBottomSheet() {
    this._bottomSheet.ngOnDestroy();
  }

}
