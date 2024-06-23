import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TestimoniosService } from '../../../../../core/services/testimonios.service';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ITestimonio } from '../../../../../core/models/Testimonio.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-testimonio',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './edit-testimonio.component.html',
  styleUrl: './edit-testimonio.component.css'
})
export class EditTestimonioComponent implements OnInit {

  formTestimonioEdit: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private testimonioService: TestimoniosService,
    public dialogRef: MatDialogRef<EditTestimonioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITestimonio // Inyección de datos del diálogo
  ) {
    this.formTestimonioEdit = this.formBuilder.group({
      img: [this.data.img, [Validators.required]],
      title: [this.data.title, [Validators.required]],
      description: [this.data.description, [Validators.required]],
    });
  }

  ngOnInit(): void {

    console.log(this.data)
  }

  save(): void {
    if (this.formTestimonioEdit.valid) {
      const editTestimonio = { ...this.data, ...this.formTestimonioEdit.value };
      console.log("Datos enviados:", editTestimonio);
      this.testimonioService.editTestimonio(editTestimonio, editTestimonio._id).subscribe(
        res => {
          console.log("Testimonio editado:", res);
          this.dialogRef.close(res); // Cerrar el diálogo y devolver resultado si es necesario
        },
        error => {
          console.error("Error al editar Testimonio:", error);
        }
      );
    }
  }


}
