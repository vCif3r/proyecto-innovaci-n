import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MascotasService } from '../../../core/services/mascotas.service';
import { Router } from '@angular/router';
import { IMascota } from '../../../core/models/Mascota.model';

@Component({
  selector: 'app-form-mascota',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-mascota.component.html',
  styleUrl: './form-mascota.component.css'
})
export class FormMascotaComponent {
  mascota: IMascota = {};
  formMascota: FormGroup; //crear formulario sin inicializar

  constructor(  // inicializamos los servicios necesarios para utilizar
    private formBuilder: FormBuilder, // utilizar para construir el formulario
    private mascotService: MascotasService,  // ctrl+click para ir directamente al archivo service
    private routes: Router, // para redireccionar a una vista
  ){
    this.formMascota = this.formBuilder.group({ //inicializar formulario con FormBuilder
      img: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
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
          console.log("Mascota guardada: ", res)
        }
      }, error => {
        console.error("Error al guardar mascota:", error);
      });
    }

  }
}
