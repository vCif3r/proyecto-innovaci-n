import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMascota } from '../../../core/models/Mascota.model';
import { MascotasService } from '../../../core/services/mascotas.service';
import { CommonModule } from '@angular/common';
import { FormMascotaComponent } from '../../../shared/components/form-mascota/form-mascota.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule,FormMascotaComponent],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent implements OnInit, OnDestroy {
  mascotas: IMascota[] = [];
  subscription?: Subscription;

  constructor(private mascotService: MascotasService){}

  ngOnInit(): void {
    this.getMascotas();
    this.subscription = this.mascotService.refresh$.subscribe(()=>{
      this.getMascotas();
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); // observable cerrado
    console.log("observable cerrado")
  }

  getMascotas(){
    this.mascotService.allMascotas().subscribe(mascotas => this.mascotas = mascotas);
  }
}
