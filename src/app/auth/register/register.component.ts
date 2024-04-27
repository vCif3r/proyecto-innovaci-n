import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEyeSlash, faEye, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  faEyeSlash = faEyeSlash
  currentIcon = faEyeSlash;
  faEye = faEye
  faUser = faUser
  faEnvelope = faEnvelope
  hidePassword: boolean = true;

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
    this.currentIcon = this.hidePassword ? this.faEyeSlash : this.faEye;
  }


  registerForm: FormGroup;

  constructor(private _auth: AuthService, private router: Router, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onRegister() {
    if (this.registerForm.valid) {
      const formValues = this.registerForm.value;
      this._auth.register(formValues).subscribe(
        res => {
          //localStorage.setItem('token', res.token)
          if(res){
            this.router.navigate(['/']);
          }
        },
        err => console.log(err)
      )
    }
  }
}
