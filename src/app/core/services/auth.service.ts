import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userDetails: any;

  private urlLogin: string = 'http://localhost:3000/auth/login'
  private urlRegister: string = 'http://localhost:3000/auth/register'

  constructor(private _http: HttpClient, private _router: Router) { }

  login(user: any){
    return this._http.post<any>(this.urlLogin, user)
  }

  register(user: any){
    return this._http.post<any>(this.urlRegister, user)
  }

  loggedIn(){
    return !!localStorage.getItem('token') // return true or false
  }

  getToken(){
    return localStorage.getItem('token')
  }

  setUserDetails(user: any) {
    this.userDetails = user;
  }

  getUserDetails() {
    return this.userDetails;
  }

  isAuthenticated(): boolean {
    // obtener el token y verificar si es válido
    const token = this.getToken();
    return !!token;
  }

  getCurrentUser(): any {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }
    try {
      // Decodificamos el token para obtener la información del usuario
      const decodedToken = jwtDecode(token);
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token', error);
      return null;
    }
  }

  logoutUser(){
    localStorage.removeItem('token')
    window.location.reload()
  }
}
