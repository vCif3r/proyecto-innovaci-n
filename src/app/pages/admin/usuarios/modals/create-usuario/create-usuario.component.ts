import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IUsuario } from '../../../../../core/models/Usuario.model';
import { UsuariosService } from '../../../../../core/services/usuarios.service';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-usuario',
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
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent {
  formUsuario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    public dialogRef: MatDialogRef<CreateUsuarioComponent>
  ) {
    this.formUsuario = this.formBuilder.group({
      avatar: [''],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      roles: [['visitor'], [Validators.required]]
    });
  }

  save(): void {
    if (this.formUsuario.valid) {
      const usuario: IUsuario = this.formUsuario.value;
      this.usuarioService.createUser(usuario).subscribe(
        (res) => {
          console.log("Usuario guardado:", res);
          this.dialogRef.close(res);
        },
        (error) => {
          console.error("Error al guardar usuario:", error);
        }
      );
    }
  }
}
