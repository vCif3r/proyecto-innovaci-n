import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from '../../../core/models/Usuario.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  faUser = faUser

  usuario?: IUsuario;
  constructor(private _auth: AuthService){}

  ngOnInit(): void {
    this.usuario = this._auth.getCurrentUser();
  }

  logout() {
    this._auth.logoutUser();
  }
}
