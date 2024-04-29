import { Component, OnInit } from '@angular/core';
import { IMascota } from '../../../core/models/Mascota.model';
import { ActivatedRoute } from '@angular/router';
import { MascotasService } from '../../../core/services/mascotas.service';

@Component({
  selector: 'app-ficha-mascota',
  standalone: true,
  imports: [],
  templateUrl: './ficha-mascota.component.html',
  styleUrl: './ficha-mascota.component.css',
})
export class FichaMascotaComponent implements OnInit {
  mascota?: IMascota;

  constructor(
    private route: ActivatedRoute,
    private service: MascotasService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getMascotaById(id).subscribe((data) => {
      this.mascota = data;
      console.log(data);
    });
  }
}
