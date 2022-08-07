import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

myForm!: FormGroup;
bannerStatus: boolean=false;

  constructor( private fb: FormBuilder,
               private authservice : AuthService,
               private router: Router
               ) { }


onSaveForm(){
  this.authservice.setBannerLogin(this.bannerStatus)
  console.log(this.myForm.value)
  this.router.navigateByUrl('home')
}


ngOnInit() {
    this.myForm = this.fb.group({
      name:     [ '' ],
      lastName: [ '' ],
      email:    [ '' ],
      phone:    [ '' ],
      birthday: [ '' ],
      address:  [ '' ],
      // monto: ['', Validators.required ],
    });
}

}