import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IgxIconModule } from 'igniteui-angular';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThequotesComponent } from './thequotes/thequotes.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ItalicsPipe} from './italics.pipe';
import { BestquoteDirective } from './bestquote.directive';
import { FinalquoteComponent } from './finalquote/finalquote.component';


@NgModule({
  declarations: [
    AppComponent,
    ThequotesComponent,
    ItalicsPipe,
    BestquoteDirective,
    FinalquoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IgxIconModule,
    FormsModule,

    BrowserAnimationsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
