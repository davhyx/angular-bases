import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDBZComponent } from './pages/main.component';



@NgModule({
  declarations: [
    MainDBZComponent
  ],
  exports: [
    MainDBZComponent,    
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
