import { Component, Input, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListDBZComponent {

    @Input()
    public characters: Character[] = []
}
