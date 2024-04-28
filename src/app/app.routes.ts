import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';

export const routes: Routes = [
    {
      path: '', // ruta del component
      component: PrincipalComponent  // componente
    },
    {
        path: 'login', // ruta del component
        component: LoginComponent   // componente
    },
    {
        path: 'register', // ruta del component
        component: RegisterComponent   // componente
    },
    {
      path: 'testimonios', // ruta del component
      component: TestimoniosComponent  // componente
    },
    {
      path: 'blog', // ruta del component
      component: BlogComponent  // componente
    },
    {
      path: 'nosotros', // ruta del component
      component: NosotrosComponent  // componente
    }
];
