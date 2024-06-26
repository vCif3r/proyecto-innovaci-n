import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMascota } from '../../../core/models/Mascota.model';
import { MascotasService } from '../../../core/services/mascotas.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent implements OnInit {
  mascotas?: IMascota[] = [];

  constructor(private mascotService: MascotasService) {}

  ngOnInit(): void {
    this.mascotService.allMascotasDisponibles().subscribe((data) => {
      console.log('data: ',data);
      this.mascotas = data;
    });
  }

  carousels = [
    {
      img: 'assets/carousel-1.jpg',
      title: 'Los mejores animales',
      subtitle: 'Una mascota que te dará felicidad',
      parrafo: 'Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat',
    },
    {
      img: 'assets/carousel-2.jpg',
      title: 'Los mejores animales',
      subtitle: 'Una mascota que te dará felicidad',
      parrafo: 'Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat',
    },
    {
      img: 'assets/carousel-1.jpg',
      title: 'Los mejores animales',
      subtitle: 'Una mascota que te dará felicidad',
      parrafo: 'Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat',
    },
  ];
}

@NgModule({
  imports: [CommonModule],
  declarations: [
    // tus componentes
  ],
})
export class MyModule {}
