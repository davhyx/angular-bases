import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main',
    templateUrl: './main.component.html'
})

export class MainDBZComponent {

    public characters: Character[] = [{
        id: 0,
        name: 'Krillin',
        power: 1000
    },{
        id: 1,
        name: 'Goku',
        power: 9500
    },{
        id: 2,
        name: 'Vegeta',
        power: 7500
    }];

    onNewCharacter( character: Character ):void {
        this.characters.push(character);
    }

    onDeleteCharacter( id: number ):void {
        let indiceCharToBeDelete = 0;
        for ( let i=0; i < this.characters.length; i++ ) {
            if ( this.characters[i].id === id ) {
                indiceCharToBeDelete = i;
            }
        }

        this.characters.splice(indiceCharToBeDelete, 1); //Desde el incide indicado elimina 1 item
    }
        
}