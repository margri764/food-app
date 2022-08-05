import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopusComponent } from './shared/pages/popus/popus/popus.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'food-app';

  constructor( 
              public router: Router,
              private dialog : MatDialog  
              ) {
    
  }
  ngOnInit(): void {

    this.router.navigateByUrl('start')
    // setTimeout(()=>{

      // this.openDialog();
    // },10000 )

  }

  openDialog() {
    this.dialog.open(PopusComponent, {
     height: '400px',
     panelClass:"custom-modalbox",
   });
  }

}
