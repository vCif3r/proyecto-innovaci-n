import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MascotasService } from '../../../../../core/services/mascotas.service';
import { IMascota } from '../../../../../core/models/Mascota.model';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-mascota',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './create-mascota.component.html',
  styleUrl: './create-mascota.component.css'
})
export class CreateMascotaComponent {
  mascota: IMascota = {};
  formMascota: FormGroup; //crear formulario sin inicializar

  constructor(  // inicializamos los servicios necesarios para utilizar
    private formBuilder: FormBuilder, // utilizar para construir el formulario
    private mascotService: MascotasService,  // ctrl+click para ir directamente al archivo service
  ){
    this.formMascota = this.formBuilder.group({ //inicializar formulario con FormBuilder
      img: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      age: [1, [Validators.required]],
      raza: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  save(): void{

    if(this.formMascota.valid){  //verificar formulario correcto
      const value = this.formMascota.value
      this.mascota = this.formMascota.value
      console.log(value)
      this.mascotService.saveMascota(this.mascota).subscribe(res => {
        if (res){
          console.log("Mascota guardada: ", res);
        }
      }, error => {
        console.error("Error al guardar mascota:", error);
      });
    }
  }
}
