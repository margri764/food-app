import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


export interface PeriodicElement {
  name: string;
  img: string;
  price: number;
  description: string;
}


@Component({
  selector: 'app-edit-offers',
  templateUrl: './edit-offers.component.html',
  styleUrls: ['./edit-offers.component.scss']
})
export class EditOffersComponent implements OnInit {

  displayedColumns: string[] = ['img', 'name', 'price', 'description'];

    ELEMENT_DATA: PeriodicElement[] = [
      {img: "assets/off1.png",     name: 'Hamburguesa Doble', price: 1700, description: 'Black Friday - para copmpartir'},
      {img: "assets/off2.png",     name: 'Hamburguesa', price: 690, description: 'Black Friday - solo para vos'},
      {img: "assets/off3.png",     name: 'Delicia Casera', price: 490, description: 'Como en casa...'},
      {img: "assets/off4.png",     name: 'Farmacia Martinez Uno', price: 0, description: 'Oferta Agosto'},
      {img: "assets/off5.png",      name: 'Farmacia Martinez Dos', price: 0, description: 'Oferta NutriDiet'},




   
  ];
  
  dataSource :any= this.ELEMENT_DATA;

  constructor(
              private dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  // openDialog() {
  //   this.dialog.open(EditDialogComponent, {
  //   //  maxHeight: '50vh',
  //   //  height: '70vh',
  //    panelClass:"custom-modalbox-edit",
  //  });
  // }
  

}
