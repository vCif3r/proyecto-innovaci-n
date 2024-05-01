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
import { FichaMascotaComponent } from './pages/usuario/ficha-mascota/ficha-mascota.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MascotasComponent } from './pages/admin/mascotas/mascotas.component';

export const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: '',
        component: PrincipalComponent,
        title: 'Inicio'
      },
      {
        path: 'testimonios',
        component: TestimoniosComponent,
        title: 'Testimonios'
      },
      {
        path: 'blog',
        component: BlogComponent,
        title: 'Blog'
      },
      {
        path: 'nosotros',
        component: NosotrosComponent,
        title: 'Nosotros'
      },
      {
        path: 'apadrinamientos',
        component: ApadrinamientosComponent,
      },
      {
        path: 'form-apadrinamiento',
        component: Form_apadrinamientoComponent,
      },
      {
        path: 'ficha/:id',
        component: FichaMascotaComponent
      }
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Registro',
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'mascotas',
        component: MascotasComponent,
        title: 'Mascotas'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
