import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.scss']
})
export class EditCustomersComponent implements OnInit {

   api : any;

  constructor() { }

  ngOnInit(): void {
    this.randomApi();
    console.log(this.api)
  }

  randomApi(){

    fetch('https://randomuser.me/api?results=10')
    .then(res =>res.json())
    .then(data =>{this.api= data.results; console.log(data);})
    }
}
