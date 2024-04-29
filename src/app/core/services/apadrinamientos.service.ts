import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlan } from '../models/Plan.model';

@Injectable({
  providedIn: 'root'
})
export class ApadrinamientosService {

  private url = "http://localhost:3000/api/apadrinamientos"
  constructor(private http: HttpClient) { }

  allPlanes() {  // obtener planes
    return this.http.get<IPlan[]>(`${this.url}/planes`)
  }
}
