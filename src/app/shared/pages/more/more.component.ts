import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor(
            private _bottomSheet: MatBottomSheet,
            private router : Router
  ) { }

  ngOnInit(): void {
  }

    
  closeBottomSheet(navigation : string) {

    switch (navigation){
      case 'profile':
                     setTimeout(()=>{ this.router.navigateByUrl('profile')},1)
                     this._bottomSheet.ngOnDestroy();
      break;

      case 'settings':
                    setTimeout(()=>{ this.router.navigateByUrl('settings')},1)
                    this._bottomSheet.ngOnDestroy();
      break;

      case 'order':
                    setTimeout(()=>{ this.router.navigateByUrl('order')},1)
                    this._bottomSheet.ngOnDestroy();
      break; 
      
      case 'geo':
        setTimeout(()=>{ this.router.navigateByUrl('geo')},1)
        this._bottomSheet.ngOnDestroy();
      break; 

      case 'close':
                    this._bottomSheet.ngOnDestroy();
        break; 

      default: this.router.navigateByUrl('')

    }


  }

}
