import { Component, OnInit } from '@angular/core';
import { IMascota } from '../../../core/models/Mascota.model';
import { MascotasService } from '../../../core/services/mascotas.service';
import { CommonModule } from '@angular/common';
import { FormMascotaComponent } from '../../../shared/components/form-mascota/form-mascota.component';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule,FormMascotaComponent],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent implements OnInit {
  mascotas: IMascota[] = [];

  constructor(private mascotService: MascotasService){}

  ngOnInit(): void {
    this.mascotService.allMascotas().subscribe(mascotas => this.mascotas = mascotas);
  }

}
