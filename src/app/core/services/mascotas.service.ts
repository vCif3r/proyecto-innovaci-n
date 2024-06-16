import { Injectable } from '@angular/core';
import { IMascota } from '../models/Mascota.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  private _refresh$ = new Subject<void>();
  get refresh$(){
    return this._refresh$;
  }

  private url: string = 'http://localhost:3000/api/mascotas'
  constructor(private http: HttpClient) { }

  allMascotas(): Observable<IMascota[]> {
    return this.http.get<IMascota[]>(this.url);
  }

  allMascotasDisponibles(): Observable<IMascota[]> {
    return this.http.get<IMascota[]>(`${this.url}/disponibles`);
  }

  getMascotaById(id: any): Observable<IMascota> {
    return this.http.get<IMascota>(`${this.url}/${id}`);
  }

  saveMascota(mascota: IMascota): Observable<IMascota>{
    return this.http.post<IMascota>(this.url, mascota)
    .pipe(
      tap(()=>{
      this._refresh$.next();
    }));
  }

  deleteMascota(id: string): Observable<any>{
    return this.http.delete<string>(`${this.url}/${id}`);
  }

  editMascota(mascota: IMascota, id:any): Observable<IMascota>{
    return this.http.put<IMascota>(`${this.url}/${id}`, mascota);
  }
}
