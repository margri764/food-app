import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';

export interface PeriodicElement {
  name: string;
  img: string;
  price: number;
  description: string;
}


@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss'],
})

export class EditFoodComponent implements OnInit {
    
    
    displayedColumns: string[] = ['img', 'name', 'price', 'description'];

    ELEMENT_DATA: PeriodicElement[] = [
      {img: "assets/food1.png",     name: 'Hamburguesa Simple', price: 700, description: 'Lechuga, tomate y carne de primera calidad'},
      {img: "assets/fries.png",     name: 'Papas Chicas', price: 230, description: 'Tamaño chico'},
      {img: "assets/pizza.png",     name: 'Pizza', price: 490, description: 'Napolitana'},
      {img: "assets/pasta.png",     name: 'Pasta', price: 670, description: 'Tallarines con salsa bolognesa'},
      {img: "assets/coca.png",      name: 'Coca Cola', price: 180, description: '500cc'},
      {img: "assets/icecream.png",  name: 'Helado', price: 210, description: 'Chocolate, vainilla y menta granizada'},




   
  ];
  
  dataSource :any= this.ELEMENT_DATA;

  constructor(
              private dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(EditDialogComponent, {
    //  maxHeight: '50vh',
    //  height: '70vh',
     panelClass:"custom-modalbox-edit",
   });
  }
  

}
