import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../../shared/service/auth/auth.service'; // Assicurati di importare correttamente il tuo servizio di autenticazione

@Component({
  selector: 'app-personal-object',
  templateUrl: './personal-object.component.html',
  styleUrls: ['./personal-object.component.css']
})
export class PersonalObjectComponent {

  constructor(private authService: AuthService) {}

  isLoggedIn(): boolean {
    return this.authService.getToken() !== null;
    
  }
}
 