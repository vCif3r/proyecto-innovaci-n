import { Component, OnInit } from '@angular/core';
import { ITestimonio } from '../../../core/models/Testimonio.model';
import { TestimoniosService } from '../../../core/services/testimonios.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonios.component.html',
  styleUrl: './testimonios.component.css'
})
export class TestimoniosComponent implements OnInit {

  testimonios: ITestimonio[] = [];

  constructor(private testService: TestimoniosService){}

  ngOnInit(): void {
    this.testService.allTestimonios().subscribe(data => this.testimonios = data);
  }

  blogs = [
    {
      img: 'assets/perro01.jpeg',
      name: 'Clifford',
      description: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo'
    },
    {
      img: 'assets/perro03.jpg',
      name: 'Candy',
      description: 'Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est diam eos, rebum sit vero stet justo'
    },
    {
      img: 'assets/gato04.jpg',
      name: 'Duquesa',
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
