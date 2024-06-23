import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ITestimonio } from '../../../../../core/models/Testimonio.model';
import { TestimoniosService } from '../../../../../core/services/testimonios.service';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-new-testimonio',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './new-testimonio.component.html',
  styleUrl: './new-testimonio.component.css'
})
export class NewTestimonioComponent {
  testimonio: ITestimonio = {
    img: '',
    title: 0,
    description: 0
  };
  formTestimonio: FormGroup;

  constructor(  // inicializamos los servicios necesarios para utilizar
    private formBuilder: FormBuilder, // utilizar para construir el formulario
    private TestimoniosService: TestimoniosService,  // ctrl+click para ir directamente al archivo service
  ){
    this.formTestimonio = this.formBuilder.group({ //inicializar formulario con FormBuilder
      img: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  save(): void{

    if(this.formTestimonio.valid){  //verificar formulario correcto
      const value = this.formTestimonio.value
      this.testimonio = this.formTestimonio.value
      console.log(value)
      this.TestimoniosService.saveTestimonio(this.testimonio).subscribe(res => {
        if (res){
          console.log("testimonio guardada: ", res);
        }
      }, error => {
        console.error("Error al guardar testimonio:", error);
      });
    }
  }

}
