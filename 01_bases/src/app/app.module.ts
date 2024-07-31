import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { DbzModule } from "./dbz/dbz.module";
import { CountersModule } from './counters/counters.module';
import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountersModule,
    HeroesModule,
    DbzModule
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
