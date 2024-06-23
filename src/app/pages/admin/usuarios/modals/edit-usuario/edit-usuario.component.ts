import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { IUsuario } from '../../../../../core/models/Usuario.model';
import { UsuariosService } from '../../../../../core/services/usuarios.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-edit-usuario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUserComponent implements OnInit {
  formUsuario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    public dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUsuario
  ) {
    this.formUsuario = this.formBuilder.group({
      avatar: [''],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      roles: [[], [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.formUsuario.patchValue(this.data);
  }

  save(): void {
    if (this.formUsuario.valid) {
      const usuario: IUsuario = this.formUsuario.value;
      if (!usuario.password) {
        delete usuario.password; // No enviar la contraseña si está vacía
      }
      this.usuarioService.updateUser(usuario, this.data._id!).subscribe(
        (res) => {
          console.log("Usuario actualizado:", res);
          this.dialogRef.close(res);
        },
        (error) => {
          console.error("Error al actualizar usuario:", error);
        }
      );
    }
  }
}
