import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnterquotesComponent } from './enterquotes/enterquotes.component';
import { DisplayquotesComponent } from './displayquotes/displayquotes.component';
import {FormsModule} from '@angular/forms';
import {BackgroundDirective} from './background.directive';

@NgModule({
  declarations: [
    AppComponent,
    EnterquotesComponent,
    DisplayquotesComponent,
    BackgroundDirective



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
