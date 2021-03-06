import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgStTableModule } from 'NgStTable';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgStTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
