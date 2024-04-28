import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apadrinamientos',
  templateUrl: './apadrinamientos.component.html',
  styleUrls: ['./apadrinamientos.component.css']
})
export class ApadrinamientosComponent{

   blogs = [
    {
      img: 'assets/perro01.jpeg',
      name: 'Perritos libres',
      description: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo',
      form: 'form-apadrinamiento',

    },
    {
      img: 'assets/perro03.jpg',
      name: 'Perrito Ricachon',
      description: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo'
    },
    {
      img: 'assets/about-1.jpg',
      name: 'Perrito feliz',
      description: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo'
    }
  ]

  hogares = [
    {
      img: 'assets/familia01.jpeg',
      title: 'Maria y Paris',
      description: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo'
    },
    {
      img: 'assets/familia02.jpg',
      title: 'Flor y Chanel',
      description: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo'
    },
    {
      img: 'assets/familia03.jpg',
      title: 'Leny y Fito',
      description: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo'
    }
  ]

  padrinos = [
    {
      img: 'assets/padrino01.jpg',
      name: 'Grace',
      description: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo'
    },
    {
      img: 'assets/padrino02.jpg',
      name: 'Roberth',
      description: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo'
    },
    {
      img: 'assets/padrino03.jpg',
      name: 'Karina',
      description: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo'
    }
  ]


}



