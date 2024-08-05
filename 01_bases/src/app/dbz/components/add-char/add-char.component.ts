import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-addchar',
    templateUrl: './add-char.component.html',
    styleUrl: './add-char.component.css',
})
export class AddCharDBZComponent {

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {
        id: 0,
        name: '',
        power: 0
    };

    sendCharacter():void {
        if( this.character.name.length <= 2 ) return;
        this.onNewCharacter.emit({...this.character});
        this.character = { id: 0, name: '', power: 0 };
    }
}
