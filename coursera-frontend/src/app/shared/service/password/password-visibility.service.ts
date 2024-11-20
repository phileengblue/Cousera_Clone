import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordVisibilityService {
  showPassword: boolean = true;
  showNewPassword: boolean = true;
  showConfirmPassword: boolean = true;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleNewPasswordVisibility() {
    this.showNewPassword = !this.showNewPassword;
  }

  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
}
