import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe],
  templateUrl: './register-page.component.html',
  standalone: true
})
export class RegisterPageComponent {}
