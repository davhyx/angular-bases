import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {

  public name: string = 'Nombre';  
  public age: number | string = 'Edad';

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDesc():string {
    return `El heroe ${this.name} tiene ${this.age} años.`;
  }

  changeName():void {
    this.name = 'Spiderman';
  }
  changeAge():void {
    this.age = 32;
  }
}
