import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject, catchError, tap, throwError } from 'rxjs';
import { IUsuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private _refresh$ = new Subject<void>();

  get refresh$() {
    return this._refresh$;
  }

  private url: string = 'http://localhost:3000/api/usuarios';

  constructor(private http: HttpClient) { }

  // Obtener todos los usuarios
  getAllUsers(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(this.url);
  }

  // Obtener un usuario por ID
  getUserById(id: string): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${this.url}/${id}`);
  }

  // Crear un nuevo usuario
  createUser(user: IUsuario): Observable<IUsuario> {
    return this.http.post<IUsuario>(this.url, user)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }

  // Eliminar un usuario por ID
  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      tap(() => {
        this._refresh$.next();
      }),
      catchError(error => {
        console.error('Error deleting user:', error);
        return throwError(error);
      })
    );
  }

  // Editar un usuario existente
  updateUser(user: IUsuario, id: string): Observable<IUsuario> {
    return this.http.put<IUsuario>(`${this.url}/${id}`, user)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    );
  }
}
