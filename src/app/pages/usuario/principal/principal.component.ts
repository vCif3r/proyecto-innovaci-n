import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
  
})


export class PrincipalComponent {
  carousels = [
    {
    img: 'assets/carousel-1.jpg',
    title: 'Los mejores animales',
    subtitle: 'Una mascota que te dará felicidad',
    parrafo: 'Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat'
    },
    {
      img: 'assets/carousel-2.jpg',
      title: 'Los mejores animales',
      subtitle: 'Una mascota que te dará felicidad',
      parrafo: 'Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat'
    },
    {
    img: 'assets/carousel-1.jpg',
    title: 'Los mejores animales',
    subtitle: 'Una mascota que te dará felicidad',
    parrafo: 'Duo nonumy et dolor tempor no et. Diam sit diam sit diam erat'
    }
  ]

  catalogos = [
    {
      img: 'assets/price-1.jpg',
      name: 'Sara',
      description: 'Gata de 3 años, juguetona, cariñosa, rescatada hace 3 meses, su juguete favorito es un listón.'
    },
    {
      img: 'assets/price-2.jpg',
      name: 'Mika y Call',
      description: 'Hermanos de 3 años, juguetones, activos, rescatados hace 5 meses de una casa abandonada, les gusta pasear.'
    },
    {
      img: 'assets/price-1.jpg',
      name: 'Sara',
      description: 'Gata de 3 años, juguetona, cariñosa, rescatada hace 3 meses, su juguete favorito es un listón.'
    },
    {
      img: 'assets/perro03.jpg',
      name: 'Blake',
      description: 'Perro de 3 meses, tranquilo, cariñoso, rescatada hace 3 meses, su juguete favorito es un listón.'
    },
    {
      img: 'assets/price-3.jpg',
      name: 'Sara',
      description: 'Gata de 3 años, juguetona, cariñosa, rescatada hace 3 meses, su juguete favorito es un listón.'
    },
    {
      img: 'assets/perro01.jpeg',
      name: 'Chester',
      description: 'Perro de 3 años, juguetona, cariñosa, rescatada hace 3 meses, su juguete favorito es un listón.'
    },
    {
      img: 'assets/perro02.jpg',
      name: 'Sara',
      description: 'Perro de 2 meses, juguetona, cariñosa, rescatada hace 1 semana, su juguete favorito es un listón.'
    },
    {
      img: 'assets/price-1.jpg',
      name: 'Sara',
      description: 'Gata de 3 años, juguetona, cariñosa, rescatada hace 3 meses, su juguete favorito es un listón.'
    },
  ]

}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // tus componentes
  ]
})
export class MyModule { }
