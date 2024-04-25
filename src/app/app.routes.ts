import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TestimoniosComponent } from './pages/testimonios/testimonios.component';

export const routes: Routes = [
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
];
