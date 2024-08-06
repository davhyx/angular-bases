import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main',
    templateUrl: './main.component.html'
})

export class MainDBZComponent {

    constructor ( private dbzService: DbzService ) {
        
    }

    get characters(): Character[] {
        return [...this.dbzService.characters];
    }
    
    onNewCharacter ( character:Character ):void {
        this.dbzService.addCharacter( character );
    }

    onDeleteCharacter ( id:string ):void {
        this.dbzService.removeCharacter( id );
    }
}