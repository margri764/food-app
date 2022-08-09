import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { GoogleRegisterComponent } from '../messages/google-register/google-register.component';

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
                 private router: Router,
                 private dialog : MatDialog

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

      this.openDialog();
  }

  openDialog() {
    this.dialog.open(GoogleRegisterComponent, {
     height: '400px',
     panelClass:"custom-google-register",
   });
  }
  
  }