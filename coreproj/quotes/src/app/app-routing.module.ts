import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {ThequotesComponent} from './thequotes/thequotes.component';
import {FinalquoteComponent} from './finalquote/finalquote.component';
import{ViewChild} from '@angular/core';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'final', component: FinalquoteComponent},
  {path: 'showquotes', component: ThequotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
