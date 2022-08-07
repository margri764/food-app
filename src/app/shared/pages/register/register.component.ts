import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myForm!: FormGroup;
  bannerStatus: boolean=false;
  
    constructor( private fb: FormBuilder,
                 private authservice : AuthService,
                 private router: Router
                 ) { }
  
  
  onSaveForm(){
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