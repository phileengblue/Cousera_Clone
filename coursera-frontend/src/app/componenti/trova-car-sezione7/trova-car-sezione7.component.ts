import { Component } from '@angular/core';

@Component({
  selector: 'app-trova-car-sezione7',
  templateUrl: './trova-car-sezione7.component.html',
  styleUrls: ['./trova-car-sezione7.component.css']
})
export class TrovaCarSezione7Component {
  isCollapsed: boolean[]=[false, false, false, false, false, false ];
  toggleAccordion(index: number) {
    if(this.isCollapsed[index] === false){
      this.isCollapsed =[false, false, false, false, false, false ];
      return this.isCollapsed[index] = !this.isCollapsed[index];
    }
   return this.isCollapsed[index] = !this.isCollapsed[index];
  }
}
