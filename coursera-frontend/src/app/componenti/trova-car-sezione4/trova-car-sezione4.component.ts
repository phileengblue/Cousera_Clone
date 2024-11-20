import { Component } from '@angular/core';

@Component({
  selector: 'app-trova-car-sezione4',
  templateUrl: './trova-car-sezione4.component.html',
  styleUrls: ['./trova-car-sezione4.component.css']
})
export class TrovaCarSezione4Component {

  isVisible(){
    return (window.innerWidth <=1430)? true : false; 
  }
}
