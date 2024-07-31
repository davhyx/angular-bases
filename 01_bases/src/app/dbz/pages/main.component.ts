import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main',
    templateUrl: './main.component.html'
})

export class MainDBZComponent {

    public characters: Character[] = [{
        name: 'Krillin',
        power: 1000
    },{
        name: 'Goku',
        power: 9500
    },{
        name: 'Vegeta',
        power: 7500
    }];

}