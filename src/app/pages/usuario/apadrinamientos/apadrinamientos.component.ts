import { Component, OnInit } from '@angular/core';
import { ApadrinamientosService } from '../../../core/services/apadrinamientos.service';
import { IPlan } from '../../../core/models/Plan.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apadrinamientos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './apadrinamientos.component.html',
  styleUrls: ['./apadrinamientos.component.css']
})
export class ApadrinamientosComponent implements OnInit{
  planes: IPlan[] = [];

  constructor(private apadrinamientosService: ApadrinamientosService){}

  ngOnInit(): void {
    this.apadrinamientosService.allPlanes().subscribe(data => this.planes = data);
  }
}



