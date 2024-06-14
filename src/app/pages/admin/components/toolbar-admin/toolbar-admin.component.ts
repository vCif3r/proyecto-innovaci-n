import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-toolbar-admin',
  standalone: true,
  imports: [MatButtonModule,MatMenuModule,MatIconModule],
  templateUrl: './toolbar-admin.component.html',
  styleUrl: './toolbar-admin.component.css'
})
export class ToolbarAdminComponent implements OnInit {
  user:any
  constructor(private _auth: AuthService){}

  ngOnInit(): void {
    this.user = this._auth.getCurrentUser()
  }
  
}
