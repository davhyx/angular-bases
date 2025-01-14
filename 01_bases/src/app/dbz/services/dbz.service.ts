import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 1000
    },{
        id: uuid(),
        name: 'Goku',
        power: 9500
    },{
        id: uuid(),
        name: 'Vegeta',
        power: 7500
    }];

    addCharacter( character: Character ):void {
        // El '...' "spread" nos añade todas las propiedades de ese objeto, y luego sobreesribimos el id con el uuid
        const newCharacter: Character = { ...character, id: uuid() }
        this.characters.push(newCharacter);
    }

    removeCharacter( id: string ):void {
        /*
        for (let i = 0; i < this.characters.length; i++) {
            if (this.characters[i].id === id) {
                this.characters.splice(i, 1); //Desde el incide indicado elimina 1 item
            }
        }
        */
        this.characters = this.characters.filter( character => character.id !== id );
    }

    constructor() { }
    
}