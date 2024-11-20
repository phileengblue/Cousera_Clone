import { Component } from '@angular/core';

@Component({
  selector: 'app-tcs4-carosello-video-card',
  templateUrl: './tcs4-carosello-video-card.component.html',
  styleUrls: ['./tcs4-carosello-video-card.component.css']
})
export class Tcs4CaroselloVideoCardComponent {
  isVisible(){
    return (window.innerWidth <=1430)? true : false; 
  }
}
