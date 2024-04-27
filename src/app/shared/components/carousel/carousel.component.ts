import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ICarouselItem } from './Icarousel-item.metadata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'] // Cambiamos styleUrl a styleUrls
})
export class CarouselComponent implements OnInit {

  /**
   * Custom Properties
   */
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: ICarouselItem[] = [];


  /**
   * Final Properties
   */
  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }

  ngOnInit() {
    // Utilizamos forEach en lugar de map, ya que no estamos devolviendo un nuevo array
    this.items.forEach((i, index) => {
      i.id = index;
      i.marginLeft = 0;
    });
  }
  setCurrentPosition(position: number) {
    this.currentPosition = position;
    const item = this.items.find(i => i.id === position);
    if (item) {
      item.marginLeft = -100 * position;
    } else {
      console.error(`No se encontró ningún elemento con id ${position}`);
    }
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    const item = this.items.find(i => i.id === nextPosition);
    if (item) {
      item.marginLeft = finalPercentage;
      this.currentPosition = nextPosition;
    } else {
      console.error(`No se encontró ningún elemento con id ${nextPosition}`);
    }
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    const item = this.items.find(i => i.id === backPosition);
    if (item) {
      item.marginLeft = finalPercentage;
      this.currentPosition = backPosition;
    } else {
      console.error(`No se encontró ningún elemento con id ${backPosition}`);
    }
  }
}

@NgModule({
  declarations: [
    CarouselComponent,
    // Otros componentes declarados aquí
  ],
  imports: [
    CommonModule,
    // Otros módulos importados aquí
  ],
})
export class AppModule { }
