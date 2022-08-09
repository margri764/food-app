import { AfterViewChecked, ChangeDetectorRef, Component, OnInit  } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-banner-register',
  templateUrl: './banner-register.component.html',
  styleUrls: ['./banner-register.component.scss']
})
export class BannerRegisterComponent implements OnInit{

  show: boolean=true;
  constructor(
              private authservice : AuthService,
              private cdRef : ChangeDetectorRef,
              
  ) { 
  }






ngOnInit(): void {

// setTimeout(()=>{
// this.show=false;
// },5000) 

}


}
