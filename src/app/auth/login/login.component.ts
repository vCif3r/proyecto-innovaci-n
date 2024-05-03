import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenDecodeService } from '../../core/services/token-decode.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  faEyeSlash = faEyeSlash;
  currentIcon = faEyeSlash;
  faEye = faEye;
  hidePassword: boolean = true;
  isSubmitted = false;
  loginForm: FormGroup;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
    this.currentIcon = this.hidePassword ? this.faEyeSlash : this.faEye;
  }

  constructor(private _auth: AuthService, private router: Router, private _decode: TokenDecodeService, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formControls() {
    return this.loginForm.controls;
 }

  onLogin():void {
    this.isSubmitted = true;
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;
      this._auth.login(formValues).subscribe(
        res => {
          localStorage.setItem('token', res.token)
          const tokenPayload = this._decode.decodeToken(res.token);
          // Redirigir al usuario basándose en su rol
          if (tokenPayload.roles.includes('visitor')) {
            this.router.navigate(['/']);
          } else if (tokenPayload.roles.includes('admin')) {
            this.router.navigate(['/admin']);
          } else {
            // Redirigir a una página de error o de inicio si el rol no es reconocido
            this.router.navigate(['/error']);
          }
        },
        err => console.log(err)
      )
    }
  }
}