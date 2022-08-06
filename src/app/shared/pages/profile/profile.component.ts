import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

myForm!: FormGroup;

  constructor( private fb: FormBuilder) { }


onSaveForm(){
  console.log(this.myForm.value)
}


ngOnInit() {
    this.myForm = this.fb.group({
      name:     [ '' ],
      lastName: [ '' ],
      birthday: [ '' ],
      address:  [ '' ],
      // monto: ['', Validators.required ],
    });
}

}