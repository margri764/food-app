import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popus',
  templateUrl: './popus.component.html',
  styleUrls: ['./popus.component.scss']
})
export class PopusComponent implements OnInit {

  constructor(
    public dialog : MatDialog
  ) { }

  ngOnInit(): void {
  }


 


}
