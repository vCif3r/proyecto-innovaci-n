import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEyeSlash, faEye, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
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
}
