import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenDecodeService } from '../core/services/token-decode.service';
import { AuthService } from '../core/services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenDecodeService,
    private router: Router,
    private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token = this.authService.getToken();
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    const tokenPayload = this.tokenService.decodeToken(token);
    //verificar que los roles del usuario autenticado tengan el rol esperado en la ruta padre ubicado en app.routes
    if (!tokenPayload.roles.includes(route.data["expectedRole"])) {
        this.router.navigate(['/']); // no existe el rol en las rutas devolver al inicio
        return false;
    }
    return true;
  }
}
