import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainDBZComponent } from './pages/main.component';
import { ListDBZComponent } from './components/list/list.component';
import { AddCharDBZComponent } from './components/add-char/add-char.component';



@NgModule({
  declarations: [
    MainDBZComponent,
    ListDBZComponent,
    AddCharDBZComponent
  ],
  exports: [
    MainDBZComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
