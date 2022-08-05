import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeliveryComponent } from 'src/app/shared/pages/delivery/delivery.component';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(
              private dialog : MatDialog
  ) { }

  ngOnInit(): void {

    setTimeout(()=>{
      this.openDialog()
    }, 1000)
  }

  openDialog() {
    this.dialog.open(DeliveryComponent, {
    //  maxHeight: '50vh',
     height: '400px',
     panelClass:"custom-modalbox",
   });
  }
}
