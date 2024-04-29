import { Injectable } from '@angular/core';
import { IMascota } from '../models/Mascota.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private url: string = 'http://localhost:3000/api/mascotas'
  constructor(private http: HttpClient) { }

  allMascotas() {
    return this.http.get<IMascota[]>(this.url);
  }

  getMascotaById(id: any) {
    return this.http.get<IMascota>(`${this.url}/${id}`);
  }
}
