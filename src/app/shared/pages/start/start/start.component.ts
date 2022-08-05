import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {




constructor(
  private route : Router
) { }

ngOnInit(): void {

  setTimeout( ()=>{
    this.route.navigateByUrl('home')
},2000)

}

}
