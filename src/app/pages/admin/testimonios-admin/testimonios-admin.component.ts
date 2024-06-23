import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTestimonioComponent } from './modals/new-testimonio/new-testimonio.component';
import { ITestimonio } from '../../../core/models/Testimonio.model';
import { EditTestimonioComponent } from './modals/edit-testimonio/edit-testimonio.component';
import { TestimoniosService } from '../../../core/services/testimonios.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-testimonios-admin',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './testimonios-admin.component.html',
  styleUrl: './testimonios-admin.component.css'
})
export class TestimoniosAdminComponent implements OnInit, OnDestroy{
  readonly dialog = inject(MatDialog);

  openDialogCreate() {
    const dialogRefCreate = this.dialog.open(NewTestimonioComponent);
  }

  openDialogEdit(mascota: ITestimonio){
    const dialogRefEdit = this.dialog.open(EditTestimonioComponent, {
      data: mascota // Pasa la mascota seleccionada como datos al diálogo de edición
    });
  }

  testimonios: ITestimonio[] = [];
  subscription?: Subscription;

  constructor(private testimonioService: TestimoniosService){
  }

  ngOnInit(): void {
    this.getTestomios();
    this.subscription = this.testimonioService.refresh$.subscribe(()=>{
      this.getTestomios();
    })
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe(); // observable cerrado
    console.log("observable cerrado")
  }

  getTestomios(){
    this.testimonioService.allTestimonios().subscribe(testimonios => this.testimonios = testimonios);
  }

  deleteTestomonio(id:string){
    console.log('id: ', id)
    this.testimonioService.deleteTestimonio(id).subscribe(
      () => {
        console.log('Testimonio eliminada correctamente');
        this.getTestomios();
      },
      error => {
        console.error('Error al eliminar el testimonio:', error);
      }
    );
  }
}
