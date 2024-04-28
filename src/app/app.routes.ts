import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TestimoniosComponent } from './pages/usuario/testimonios/testimonios.component';
import { BlogComponent } from './pages/usuario/blog/blog.component';
import { PrincipalComponent } from './pages/usuario/principal/principal.component';
import { NosotrosComponent } from './pages/usuario/nosotros/nosotros.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ApadrinamientosComponent } from './pages/usuario/apadrinamientos/apadrinamientos.component';
import { Form_apadrinamientoComponent } from './pages/usuario/form_apadrinamiento/form_apadrinamiento.component';

export const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: '',
        component: PrincipalComponent,
      },
      {
        path: 'testimonios',
        component: TestimoniosComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
      },
      {
        path: 'nosotros',
        component: NosotrosComponent,
      },
      {
        path: 'apadrinamientos',
        component: ApadrinamientosComponent,
      },
      {
        path: 'form-apadrinamiento',
        component: Form_apadrinamientoComponent,
      }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];
