import { Component } from '@angular/core';



@Component({
  selector: 'app-trova-car-sezione1',
  templateUrl: './trova-car-sezione1.component.html',
  styleUrls: ['./trova-car-sezione1.component.css']
})
export class TrovaCarSezione1Component {

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
