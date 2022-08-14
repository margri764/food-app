///<reference path='../../../../../node_modules/@types/google.maps/index.d.ts'/>

import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PopLocationComponent } from './pop-location/pop-location.component';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
export class GeoComponent implements OnInit {

  @ViewChild('divMap') divMap!: ElementRef;
  @ViewChild('inputPlaces') inputPlaces!: ElementRef;


  mapa!:google.maps.Map;
  markers!:google.maps.Marker[];
  startPosition!: GeolocationPosition;

  myForm!: FormGroup;
  bannerStatus: boolean=false;
  showForm:boolean= false;
  selected:boolean = false;
  placeToSendForm:any;

  
    constructor( private fb: FormBuilder,
                 private authservice : AuthService,
                 private router: Router,
                 private rendered : Renderer2,
                 private cdRef: ChangeDetectorRef,
                 private dialog : MatDialog 

) {

    this.markers=[];
 }



 onSaveForm(){
  console.log(this.myForm.value)
}

openDialog() {
  this.dialog.open(PopLocationComponent, {
   panelClass:"custom-modalbox-geo",
 });
}

ngOnInit() {

this.openDialog();

  this.myForm = this.fb.group({
    busqueda:   [ '' ],
    direccion:  [ '' ],
    number:     [ '' ],
    referencia: [ '' ],
    ciudad:     [ '' ],
    provincia:  [ '' ],
    favorite:   [ '' ],

    
  });
  
}

ngAfterViewInit() {

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
      this.startPosition=position;
      this.cargarMapa (position);
      this.cargarAutocomplete();

    })
  }else{
    console.log('navegegador no compatible')
  }
}

private cargarAutocomplete(){
  var autocomplete = new google.maps.places.Autocomplete(this.rendered.selectRootElement(this.inputPlaces.nativeElement),
  {
    componentRestrictions:{
    country: ['ARG']
     },
  fields: ['address_components','geometry'],
  types: ['address']
  })

  google.maps.event.addListener(autocomplete, 'place_changed',()=>{
    const place : any = autocomplete.getPlace();

    console.log('el place completo es:', place);

    (place)?this.showForm=true : '';

      //solo muestra el formulario y el mapa si hay una direccion completa
  

    this.mapa.setCenter(place.geometry.location);
   
    
    const marker = new google.maps.Marker({
      position: place.geometry.location
    });


    marker.setMap(this.mapa);
    this.llenarFormulario(place);
   

  })
}

llenarFormulario(place:any){
  
  
  var addressNameFormat : any = {
    'street_number' : 'short_name',
    'route' :         'long_name',
    'administrative_area_level_1' : 'short_name',
    'administrative_area_level_2' : 'short_name',
    'administrative_area_level_3' : 'short_name',
    'country' : 'long_name',
    'postal_code' : 'short_name'
  };

  const getAddresComp = (type:any)=>{

    for( const component of place.address_components){
      if(component.types[0] === type){
        return component[addressNameFormat[type]];
      }
    }
    return '';
  };

  const componentForm ={
    direccion :  'location',
    ciudad :     'administrative_area_level_2',
    provincia :  'administrative_area_level_1',
  };

  Object.entries(componentForm).forEach( entry =>{

    const [key, value]= entry;
    this.myForm.controls[key].setValue(getAddresComp(value))
    
    this.myForm.controls['direccion'].setValue(getAddresComp("route") +'  '+getAddresComp('street_number'))
  });
}

cargarMapa( position:any){

  const opciones={
    center : new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.mapa= new google.maps.Map(this.rendered.selectRootElement(this.divMap.nativeElement),opciones)

   const markerPosition= new google.maps.Marker({
    position: this.mapa.getCenter(),
    title: 'Marcelo'
   });

   markerPosition.setMap(this.mapa);
   this.markers.push(markerPosition);


}

selectFavorite(){
  this.selected=!this.selected;
  (this.selected)? this.myForm.controls['favorite'].setValue('es la direccion favorita'):'';
}
                  
  }
                
      



  


