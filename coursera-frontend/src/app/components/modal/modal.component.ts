import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth/auth.service';
import { PasswordVisibilityService } from 'src/app/shared/service/password/password-visibility.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  isVisibleLogIn: boolean = false;
  isVisibleSignIn: boolean = false;
  isConfirmLoading: boolean = false;

  showSignInOnly: boolean = false;

  date = null;

  selectedGender: string = '';
  genders = [
    { label: 'Uomo', value: 'male' },
    { label: 'Donna', value: 'female' },
    { label: 'Altro', value: 'other' },
  ];

  loginForm: FormGroup;
  submitted: boolean = false;
  isSubmitting: boolean = false;
  private fb_loginForm: FormBuilder = inject(FormBuilder);

  signinForm: FormGroup;
  submittedSignIn: boolean = false;
  isSubmittingSignIn: boolean = false;
  private fb_signinForm: FormBuilder = inject(FormBuilder);

  private authService: AuthService = inject(AuthService);
  private router: Router = inject(Router); 

  loginAccount = {
    email: '',
    password: '',
  };

  signinAccount = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    phone_number: '',
    birth_date: new Date(),
    gender: '',
  };

  constructor() {
    this.loginForm = this.fb_loginForm.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        /* [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$'
          ),
        ], */
      ],
    });

    this.signinForm = this.fb_signinForm.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{8,}$'
          ),
        ],
      ],
      phone_number: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern(
            '^(?:\\+39\\s?)?0?\\d{2,4}[\\s\\-]?\\d{3}[\\s\\-]?\\d{4}$'
          ),
        ],
      ],
      birth_date: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  today = new Date();
  eighteenYearsAgo = new Date(
    this.today.getFullYear() - 18,
    this.today.getMonth(),
    this.today.getDate()
  );

  disableDates = (current: Date): boolean => {
    return current > this.eighteenYearsAgo;
  };

  get fLognIn(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  get fSignIn(): { [key: string]: AbstractControl } {
    return this.signinForm.controls;
  }

  public passwordService: PasswordVisibilityService = inject(
    PasswordVisibilityService
  );

  togglePasswordVisibility(): void {
    this.passwordService.togglePasswordVisibility();
  }

  showModalLogIn(): void {
    this.isVisibleLogIn = true;
  }

  showModalSignIn(): void {
    this.isVisibleSignIn = true;
    this.isVisibleLogIn = false;
  }

  

  handleSubmitLogIn(): void {
    this.submitted = true;
  
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          if (res && res.authorization && res.authorization.token) {
            // Memorizza il token
            this.authService.setToken(res.authorization.token);
  
            // Controlla il ruolo dell'utente
            const userRole = res.roles[0].name; // Assume che i ruoli siano nella proprietà `roles`
            
            if (userRole === 'superadmin') {
              this.router.navigate(['/admin']); // Reindirizza l'admin alla pagina admin
            } else if (userRole === 'user') {
              this.router.navigate(['/home']); // Reindirizza l'utente normale alla home
            } else {
              alert('Ruolo sconosciuto');
            }
          } else {
            alert('Credenziali errate');
          }
        },
        error: (err) => {
          alert('Errore durante il login. Verifica le credenziali.');
        }
      });
    } else {
      // Marca tutti i controlli come toccati per mostrare i messaggi di errore
      Object.values(this.loginForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
  
 
  handleSubmitSignIn(): void {
    this.submittedSignIn = true;

    if (this.signinForm.valid) {
      this.authService.signin(this.signinForm.value).subscribe((res) => {
        this.signinAccount = res;
      });

      this.isSubmittingSignIn = true;
      setTimeout(() => {
        console.log('SignIn Form:', this.signinForm.value);

        this.signinForm.reset();
        this.isSubmittingSignIn = false;
        this.isVisibleSignIn = false;
        this.submittedSignIn = false;
      }, 1000);
    } else {
      Object.values(this.signinForm.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }

  handleCancel(): void {
    this.isVisibleLogIn = false;
    this.isVisibleSignIn = false;

    this.loginForm.reset();
    this.submitted = false;
  }

  ngOnInit(): void {
    if (this.genders.length > 0) {
      this.selectedGender = this.genders[0].value;
    }
  }
}
