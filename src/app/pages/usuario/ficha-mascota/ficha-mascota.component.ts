import { Component, OnInit } from '@angular/core';
import { IMascota } from '../../../core/models/Mascota.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MascotasService } from '../../../core/services/mascotas.service';

@Component({
  selector: 'app-ficha-mascota',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ficha-mascota.component.html',
  styleUrl: './ficha-mascota.component.css',
})
export class FichaMascotaComponent implements OnInit {
  mascota?: IMascota;

  constructor(
    private route: ActivatedRoute,
    private service: MascotasService,private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getMascotaById(id).subscribe((data) => {
      this.mascota = data;
      console.log(data);
    });
  }

  selectPet(pet: IMascota): void {
    this.router.navigate(['/form-apadrinamiento', pet._id]);
  }
}
