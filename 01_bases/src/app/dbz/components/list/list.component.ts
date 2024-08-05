import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListDBZComponent {

    @Input()
    public characters: Character[] = [];

    @Output()
    public onDeleteOneCharacter: EventEmitter<number> = new EventEmitter();

    onDeleteIDCharacter(id:number) {
        this.onDeleteOneCharacter.emit(id);
    }

    onDeleteCharacter(i:number):void {
        console.log(i);        
    }
}
