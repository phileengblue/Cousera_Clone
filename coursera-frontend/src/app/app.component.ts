import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from './shared/service/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /* ngOnInit(): void {
    this.admin = this.authService.isAdmin('superadmin');
    this.role = true;

    console.log(this.admin);
  } */

  private authService: AuthService = inject(AuthService);

  admin: string = '';
  role: string = '';

  ngOnInit(): void {
    this.role = this.authService.isAdmin('superadmin');
    console.log('Is superadmin:', this.role);
  }
}
