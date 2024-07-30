import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  constructor() {}

  private counterInit: number = 100;
  public counter: number = this.counterInit;

  counterInc(): void {
    this.counter += 1;
  }
  counterDec(): void {
    this.counter -= 1;
  }
  counterReset(): void {
    this.counter = this.counterInit;
  }
}
