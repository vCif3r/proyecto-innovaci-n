import { Injectable } from '@angular/core';
import { ITestimonio } from '../models/Testimonio.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {

  private _refresh$ = new Subject<void>();
  get refresh$(){
    return this._refresh$;
  }

  private url = 'http://localhost:3000/api/testimonios';
  constructor(private http: HttpClient) { }

  allTestimonios(): Observable<ITestimonio[]> {
    return this.http.get<ITestimonio[]>(this.url);
  }

  getTestimoniosById(id: any): Observable<ITestimonio> {
    return this.http.get<ITestimonio>(`${this.url}/${id}`);
  }

  saveTestimonio(testimonio: ITestimonio): Observable<ITestimonio>{
    return this.http.post<ITestimonio>(this.url, testimonio)
    .pipe(
      tap(()=>{
      this._refresh$.next();
    }));
  }

  deleteTestimonio(id: string): Observable<any>{
    return this.http.delete<string>(`${this.url}/${id}`);
  }

  editTestimonio(testimonio: ITestimonio, id:any): Observable<ITestimonio>{
    return this.http.put<ITestimonio>(`${this.url}/${id}`, testimonio);
  }
}
