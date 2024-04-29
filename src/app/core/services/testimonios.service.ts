import { Injectable } from '@angular/core';
import { ITestimonio } from '../models/Testimonio.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimoniosService {
  testimonios: ITestimonio[] = [];

  private url = 'http://localhost:3000/api/testimonios';

  constructor(private http: HttpClient) { }

  allTestimonios() {
    return this.http.get<ITestimonio[]>(this.url)
  }
}
