import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'app-custom-page',
  standalone: true,
  imports: [ToggleCasePipe],
  templateUrl: './custom-page.component.html',
  styleUrl: './custom-page.component.css'
})
export class CustomPageComponent {
  name = signal('David Castro');

  toggleCaseStat = signal(true);

  toggleCase() {
    this.toggleCaseStat.set(!this.toggleCaseStat());
  }
}
