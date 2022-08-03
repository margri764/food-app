import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessComponent } from 'src/app/shared/message/success/success/success.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(
              private dialog : MatDialog
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
}
