import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pop-location',
  templateUrl: './pop-location.component.html',
  styleUrls: ['./pop-location.component.scss']
})
export class PopLocationComponent implements OnInit {

  selected:boolean=false;
  myForm!: FormGroup;


  constructor(
                 private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    

    this.myForm = this.fb.group({
      busqueda:   [ '' ],
      direccion:  [ '' ],
      number:     [ '' ],
      referencia: [ '' ],
      ciudad:     [ '' ],
      provincia:  [ '' ],
      favorite:   [ '' ],
  
      
    });

    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
    
  
      })
    }else{
      console.log('navegegador no compatible')
    }
  }

  onSaveForm(){
    alert(JSON.stringify(this.myForm.value))
  }


  selectFavorite(){
    this.selected=!this.selected;
    (this.selected)? this.myForm.controls['favorite'].setValue('es la direccion favorita'):'';
  }



}
