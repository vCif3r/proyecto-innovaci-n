import { CommonModule } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { IMascota } from '../../../../../core/models/Mascota.model';
import { MascotasService } from '../../../../../core/services/mascotas.service';
import { Router } from 'express';

@Component({
  selector: 'app-edit-mascota',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './edit-mascota.component.html',
  styleUrl: './edit-mascota.component.css'
})
export class EditMascotaComponent implements OnInit {

  formMascotaEdit: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mascotService: MascotasService,
    public dialogRef: MatDialogRef<EditMascotaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IMascota // Inyección de datos del diálogo
  ) {
    this.formMascotaEdit = this.formBuilder.group({
      img: [this.data.img, [Validators.required]],
      name: [this.data.name, [Validators.required, Validators.minLength(4)]],
      age: [this.data.age, [Validators.required]],
      raza: [this.data.raza, [Validators.required]],
      description: [this.data.description, [Validators.required]],
    });
  }

  ngOnInit(): void {
    
    console.log(this.data)
  }

  save(): void {
    if (this.formMascotaEdit.valid) {
      const editedMascota = { ...this.data, ...this.formMascotaEdit.value };
      this.mascotService.editMascota(editedMascota, editedMascota._id).subscribe(
        res => {
          console.log("Mascota editada:", res);
          this.dialogRef.close(res); // Cerrar el diálogo y devolver resultado si es necesario
        },
        error => {
          console.error("Error al editar mascota:", error);
        }
      );
    }
  }
}