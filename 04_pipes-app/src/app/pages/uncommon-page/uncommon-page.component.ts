import { Component, signal } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe, AsyncPipe],
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

  //i18nPluralPipe
  clients = signal([
    'Maria',
    'Pedro',
    'Carlos',
    'Marta'
  ])
  clientsMap = signal({
    '=0': 'No hay clientes esperando',
    '=1': 'Hay un cliente esperando',
    'other': 'Actualmente hay # clientes esperando'
  })
  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data en la promesa');
      console.log('Promesa fin');
    }, 3500);
  })

  myObservableTimer = interval(3500).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap:', value))
  )

}
