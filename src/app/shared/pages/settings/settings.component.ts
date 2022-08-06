import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingForm!: FormGroup;

  constructor( private fb: FormBuilder) { }

  onFormSubmit(){
    console.log(JSON.stringify(this.settingForm.value, null, 2))
  }

  ngOnInit() {
    this.settingForm = this.fb.group({
      enableWifi:  [''],
      acceptTerms: [''],
    });
}

}
