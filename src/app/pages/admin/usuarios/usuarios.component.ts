import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { UsuariosService } from '../../../core/services/usuarios.service';
import { IUsuario } from '../../../core/models/Usuario.model';

import { EditUserComponent } from './modals/edit-usuario/edit-usuario.component';
import { CreateUsuarioComponent } from './modals/create-usuario/create-usuario.component';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit, OnDestroy {

  readonly dialog = inject(MatDialog);
  usuarios: IUsuario[] = [];
  subscription?: Subscription;

  constructor(private userService: UsuariosService) {}

  ngOnInit(): void {
    this.getUsuarios();
    this.subscription = this.userService.refresh$.subscribe(() => {
      this.getUsuarios();
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    console.log("observable cerrado");
  }

  getUsuarios() {
    this.userService.getAllUsers().subscribe(usuarios => this.usuarios = usuarios);
  }

  openDialogCreate() {
    const dialogRefCreate = this.dialog.open(CreateUsuarioComponent, {
      width: '500px',
      maxWidth: '90vw',
      maxHeight: '90vh',
    });

    dialogRefCreate.afterClosed().subscribe(result => {
      if (result) {
        this.getUsuarios();
      }
    });
  }

  openDialogEdit(usuario: IUsuario) {
    const dialogRefEdit = this.dialog.open(EditUserComponent, {
      data: usuario,
      width: '500px',
      maxWidth: '90vw',
      maxHeight: '90vh',
    });

    dialogRefEdit.afterClosed().subscribe(result => {
      if (result) {
        this.getUsuarios();
      }
    });
  }

  deleteUsuario(id: string) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.userService.deleteUser(id).subscribe(
        () => {
          console.log('Usuario eliminado correctamente');
          this.getUsuarios(); // Recargar la lista después de eliminar
        },
        error => {
          console.error('Error al eliminar el usuario:', error);
        }
      );
    }
  }
}
