import { Component } from '@angular/core';

@Component({
  selector: 'app-trova-car-sezione6',
  templateUrl: './trova-car-sezione6.component.html',
  styleUrls: ['./trova-car-sezione6.component.css']
})
export class TrovaCarSezione6Component {
  functionResponse(){
    if (window.innerWidth <= 767) {
      return 'mobile';
    } else if (window.innerWidth <= 992) {
      return 'tablet';
    }
    return 'laptop';
  }
}
