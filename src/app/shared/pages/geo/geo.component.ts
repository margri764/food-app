///<reference path='../../../../../node_modules/@types/google.maps/index.d.ts'/>

import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.scss']
})
export class GeoComponent implements OnInit, AfterViewInit {

  @ViewChild('divMap') divMap!: ElementRef;
  @ViewChild('inputPlaces') inputPlaces!: ElementRef;

  mapa!:google.maps.Map;
  markers!:google.maps.Marker[];

  myForm!: FormGroup;
  bannerStatus: boolean=false;
  
    constructor( private fb: FormBuilder,
                 private authservice : AuthService,
                 private router: Router,
                 private rendered : Renderer2

) {

    this.markers=[];
 }

 onSaveForm(){
  console.log(this.myForm.value)
}

ngOnInit() {
  this.myForm = this.fb.group({
    busqueda:   [ '' ],
    direccion:  [ '' ],
    number:  [ '' ],
    referencia: [ '' ],
    ciudad:     [ '' ],
    provincia:  [ '' ],
    region:     [ '' ],
    
  });
  
}

ngAfterViewInit() {

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) => {
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

  const getAddresComp=  (type:any)=>{
    for( const component of place.address_components){
      if(component.types[0] === type){
        return component[addressNameFormat[type]];
      }
    }
    return '';
  };

  const componentForm ={
    direccion :  'route',
    number:      'street_number',
    ciudad :     'administrative_area_level_2',
    provincia :  'administrative_area_level_1',
    region :     'administrative_area_level_3'
  };

  Object.entries(componentForm).forEach( entry =>{
    const [key, value]= entry;
    console.log(key, value);
    this.myForm.controls[key].setValue(getAddresComp(value))
  });

    this.myForm.controls['direccion'].setValue(getAddresComp("route")+''+getAddresComp('street_number'))
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
                  
  }
                
      

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
      

  


