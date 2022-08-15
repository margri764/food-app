// <<<<<<< HEAD
///<reference path='../../../../../node_modules/@types/google.maps/index.d.ts'/>

import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PopLocationComponent } from './pop-location/pop-location.component';
// =======

// ///<reference path='../../../../../node_modules/@types/google.maps/index.d.ts'/>


// import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth/auth.service';

// >>>>>>> pwa

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
// <<<<<<< HEAD
// export class GeoComponent implements OnInit {
// =======
export class GeoComponent implements OnInit, AfterViewInit {

// >>>>>>> pwa

  @ViewChild('divMap') divMap!: ElementRef;
  @ViewChild('inputPlaces') inputPlaces!: ElementRef;

// <<<<<<< HEAD

  mapa!:google.maps.Map;
  markers!:google.maps.Marker[];
  startPosition!: GeolocationPosition;

  myForm!: FormGroup;
  bannerStatus: boolean=false;
  showForm:boolean= false;
  selected:boolean = false;
  placeToSendForm:any;

// =======
//   mapa!:google.maps.Map;
//   markers!:google.maps.Marker[];


//   myForm!: FormGroup;
//   bannerStatus: boolean=false;
// >>>>>>> pwa
  
    constructor( private fb: FormBuilder,
                 private authservice : AuthService,
                 private router: Router,
// <<<<<<< HEAD
                 private rendered : Renderer2,
                 private cdRef: ChangeDetectorRef,
                 private dialog : MatDialog 
// =======
                //  private rendered : Renderer2
// >>>>>>> pwa

) {

    this.markers=[];
 }


// <<<<<<< HEAD

// =======
// >>>>>>> pwa
 onSaveForm(){
  console.log(this.myForm.value)
}

// <<<<<<< HEAD
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

// =======

// ngOnInit() {
//   this.myForm = this.fb.group({
//     busqueda:   [ '' ],
//     direccion:  [ '' ],
//     referencia: [ '' ],
//     ciudad:     [ '' ],
//     provincia:  [ '' ],
//     region:     [ '' ],
// >>>>>>> pwa
    
  });
  
}

// <<<<<<< HEAD
// =======

// >>>>>>> pwa
ngAfterViewInit() {

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
// <<<<<<< HEAD
      this.startPosition=position;
      this.cargarMapa (position);
      this.cargarAutocomplete();

// =======
//        this.cargarMapa (position);
//       this.cargarAutocomplete();
// >>>>>>> pwa
    })
  }else{
    console.log('navegegador no compatible')
  }
}

private cargarAutocomplete(){
// <<<<<<< HEAD
// =======
//  console.log('entrn')
// >>>>>>> pwa
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
// <<<<<<< HEAD

    console.log('el place completo es:', place);

    (place)?this.showForm=true : '';

      //solo muestra el formulario y el mapa si hay una direccion completa
  

    this.mapa.setCenter(place.geometry.location);
   
    
// =======
//     console.log('el place completo es:', place);

//     this.mapa.setCenter(place.geometry.location);
// >>>>>>> pwa
    const marker = new google.maps.Marker({
      position: place.geometry.location
    });

// <<<<<<< HEAD

    marker.setMap(this.mapa);
    this.llenarFormulario(place);
   
// =======
//     marker.setMap(this.mapa);
//     this.llenarFormulario(place);
// >>>>>>> pwa

  })
}

llenarFormulario(place:any){
  
// <<<<<<< HEAD
  
  var addressNameFormat : any = {
    'street_number' : 'short_name',
    'route' :         'long_name',
// =======
//   var addressNameFormat : any = {
//     'street_number' : 'short_name',
//     'route' :         'long_name',
//     'locality' :      'long_name',
// >>>>>>> pwa
    'administrative_area_level_1' : 'short_name',
    'administrative_area_level_2' : 'short_name',
    'administrative_area_level_3' : 'short_name',
    'country' : 'long_name',
    'postal_code' : 'short_name'
  };

// <<<<<<< HEAD
  const getAddresComp = (type:any)=>{

// =======
//   const getAddresComp=  (type:any)=>{
// >>>>>>> pwa
    for( const component of place.address_components){
      if(component.types[0] === type){
        return component[addressNameFormat[type]];
      }
    }
    return '';
  };

  const componentForm ={
    direccion :  'location',
// <<<<<<< HEAD
    ciudad :     'administrative_area_level_2',
    provincia :  'administrative_area_level_1',
  };

  Object.entries(componentForm).forEach( entry =>{

    const [key, value]= entry;
    this.myForm.controls[key].setValue(getAddresComp(value))
    
    this.myForm.controls['direccion'].setValue(getAddresComp("route") +'  '+getAddresComp('street_number'))
// =======
//     ciudad :     'administrative_area_level_3',
//     provincia : 'administrative_area_level_2',
//     region :     'administrative_area_level_1'
//   };

//   Object.entries(componentForm).forEach( entry =>{
//     const [key, value]= entry;
//     console.log(key, value);
//     this.myForm.controls[key].setValue(getAddresComp(value))
// >>>>>>> pwa
  });
}

cargarMapa( position:any){
// <<<<<<< HEAD

// =======
// >>>>>>> pwa
  const opciones={
    center : new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
// <<<<<<< HEAD
  this.mapa= new google.maps.Map(this.rendered.selectRootElement(this.divMap.nativeElement),opciones)

// =======
  
  // this.mapa= new google.maps.Map(this.rendered.selectRootElement(this.divMap.nativeElement),opciones)
// >>>>>>> pwa
   const markerPosition= new google.maps.Marker({
    position: this.mapa.getCenter(),
    title: 'Marcelo'
   });

   markerPosition.setMap(this.mapa);
   this.markers.push(markerPosition);

// <<<<<<< HEAD

}

selectFavorite(){
  this.selected=!this.selected;
  (this.selected)? this.myForm.controls['favorite'].setValue('es la direccion favorita'):'';
// =======
// >>>>>>> pwa
}
                  
  }
                
      


// <<<<<<< HEAD

  
// =======
// geo(){
        
//   navigator.geolocation.getCurrentPosition(pos => {
//        this.geoUpdate(pos.coords.latitude, pos.coords.longitude)
//   })


// geoUpdate(lat:number,long:number){
  
//  const googleMapKey = 'AIzaSyA5mjCwx1TRLuBAjwQw84WE6h5ErSe7Uj8';

// this.geoL=this.sanitizer.bypassSecurityTrustResourceUrl(`https://maps.googleapis.com/maps/api/staticmap?center=${lat},${ long}&zoom=17&size=400x400
// &markers=color:blue%7Clabel:S%7C62.107733,-145.541936&markers=size:tiny%7Ccolor:green%7CDelta+Junction,AK
// &markers=size:mid%7Ccolor:0xFFFF00%7Clabel:C%7CTok,AK"&key=${ googleMapKey }&signature=YOUR_SIGNATURE`)
// }
// }
      


  

  





// >>>>>>> pwa


