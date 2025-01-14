import { Component, Input, OnInit } from '@angular/core';
import { Giphy } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class GifsCardComponent implements OnInit {

  @Input()
  public giphy!: Giphy;

  ngOnInit(): void {
    if( !this.giphy ) throw new Error('Gif property is required.');
  }
  

  
}

