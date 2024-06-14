import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMascota } from '../../../core/models/Mascota.model';
import { MascotasService } from '../../../core/services/mascotas.service';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';
import { CreateMascotaComponent } from '../create-mascota/create-mascota.component';

import {ChangeDetectionStrategy, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule,CreateMascotaComponent,MatButtonModule, MatDialogModule],
  templateUrl: './mascotas.component.html',
  styleUrl: './mascotas.component.css'
})
export class MascotasComponent implements OnInit, OnDestroy {

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(CreateMascotaComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

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
