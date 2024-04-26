import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs = [
    {
      img: 'assets/team-1.jpg',
      title: 'Feliz día del gato',
    },
    {
      img: 'assets/team-2.jpg',
      title: 'Luna participo en un comercial',
    },
    {
      img: 'assets/team-3.jpg',
      title: 'Mes de abril incrementaron las adopciones',
    },
    {
      img: 'assets/team-4.jpg',
      title: 'Después de 3 años de espera, Athenea consiguió un hogar',
    }
  ]
}
