import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';
import {MatIconModule} from '@angular/material/icon';

interface menuSidebar{
  url: string,
  title: string,
  icon: string
}

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [FontAwesomeModule,RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {

  menu: menuSidebar[] = [
    {url: "/admin/dashboard",title:"Dashboard",icon:"grid_view"},
    {url: "/admin/usuarios",title:"Usuarios",icon:"group"},
    {url: "/admin/mascotas",title:"Mascotas",icon:"pets"},
    {url: "/admin/donaciones",title:"Donaciones",icon:"payments"},
    {url: "/admin/pádrinos",title:"Padrinos",icon:"supervised_user_circle"},
    {url: "/admin/testimoniosA",title:"Testimonios",icon:"book"}
  ]

  constructor(private _auth: AuthService){}

  logout(): void{
    this._auth.logoutUser();
  }
}
