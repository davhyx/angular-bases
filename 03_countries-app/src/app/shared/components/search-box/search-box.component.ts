import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input()
  public searchPlaceholder: string = '';

  @Input()
  public initValue: string = '';

  @Output()
  public onSearchValue = new EventEmitter<string>();

  emitSearchValue( value: string):void {
    this.onSearchValue.emit( value );
  }

}
