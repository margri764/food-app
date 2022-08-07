import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
              private route : Router,
              private component : AppComponent
  ) { }

  ngOnInit(): void {
    
 
  }



}
