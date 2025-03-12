import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export default class BasicPageComponent {

  nameLower = signal('david');
  nameUpper = signal('DAVID');
  fullName = signal('DAvId CAstrO');

  date = signal(new Date());

  tickingDateEffect = effect( (onCleanUp) => {
    const interval = setInterval( () => {
      this.date.set( new Date() );
    }, 1000);
    onCleanUp( () => {
      clearInterval(interval);
    })
  })
}
