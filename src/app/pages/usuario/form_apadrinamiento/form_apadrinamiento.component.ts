import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { MascotasService } from '../../../core/services/mascotas.service';
import { IMascota } from '../../../core/models/Mascota.model';

@Component({
  selector: 'app-form_apadrinamiento',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
  ],
  templateUrl: './form_apadrinamiento.component.html',
  styleUrls: ['./form_apadrinamiento.component.css']
})
export class Form_apadrinamientoComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    telefono: ['', Validators.required],
    correo: ['', Validators.required],
    dni: ['', Validators.required],
    profesion: ['', Validators.required],
    nacionalidad: ['', Validators.required],
    ciudad: ['', Validators.required],
    direccion: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;

  pet?: IMascota;
  price:number = 50

  constructor(private _formBuilder: FormBuilder,private route: ActivatedRoute, private petService: MascotasService) {}

  ngOnInit(): void {
    const petId = this.route.snapshot.paramMap.get('id');
    this.petService.getMascotaById(petId).subscribe(pet => {
      this.pet = pet;
    });
  }

}
