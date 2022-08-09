import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myForm!: FormGroup;
  bannerStatus: boolean=false;
  
    constructor( private fb: FormBuilder,
                 private authservice : AuthService,
                 private router: Router,

                 ) { }
  
  
  onSaveForm(){
    this.router.navigateByUrl('home')
  }
  
  
  ngOnInit() {
      this.myForm = this.fb.group({
        password: [ '' ],
        email:    [ '' ],
    
        // monto: ['', Validators.required ],
      });

  }


  
  }