import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroeNames: string[] = ['Ironman', 'Spiderman', 'Hulk'];
  public deletedHero: string | undefined = '';

  public removeLastHero():void {
    this.deletedHero = this.heroeNames.pop();
  }
}
