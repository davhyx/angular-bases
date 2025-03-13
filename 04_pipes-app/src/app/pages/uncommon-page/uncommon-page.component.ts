import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'David',
  gender: 'male',
  age: 44,
  address: 'Terrassa, Spain'
}

const client2 = {
  name: 'Evelyn',
  gender: 'female',
  age: 39,
  address: 'Barcelona, Spain'
}

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n Select
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if ( this.client() === client1 ) {
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }
}
