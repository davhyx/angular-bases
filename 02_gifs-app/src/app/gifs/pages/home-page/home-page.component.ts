import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Giphy } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor( private gifsService: GifsService ) {}

  get gifs(): Giphy[] {
    return this.gifsService.gifList
  }

}
