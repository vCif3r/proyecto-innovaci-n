import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { faUsers, faUserPlus, faRightToBracket, faDog, faSackDollar, faBookOpen, faGauge } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink, RouterLinkActive],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  faGauge = faGauge
  faUsers = faUsers
  faRightToBracket = faRightToBracket
  faDog = faDog
  faUserPlus = faUserPlus
  faSackDollar = faSackDollar
  faBookOpen = faBookOpen

  constructor(private _auth: AuthService){}

  logout(): void{
    this._auth.logoutUser();
  }
}
