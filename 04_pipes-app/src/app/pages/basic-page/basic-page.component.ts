import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, LOCALE_ID, effect, inject, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export default class BasicPageComponent {

  localeService = inject(LocaleService);
  currentLocale = signal(inject(LOCALE_ID));


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

  changeLocale(locale: AvailableLocale) {
    this.localeService.changeLocale(locale);
  }
}
