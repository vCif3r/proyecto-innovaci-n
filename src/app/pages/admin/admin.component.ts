import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarMenuComponent } from '../../shared/components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet, SidebarMenuComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
