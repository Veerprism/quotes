import {Injectable, OnChanges} from '@angular/core';

import {AppComponent} from './app.component';
import {Quotes} from './thequotes/quotes.model';

@Injectable({
  providedIn: 'root'
})

export class FinalquotesService implements OnChanges{
    public userdata: Quotes[] = []
  public all: Quotes
  public finalQuote: AppComponent
  public ui:string
  public show(arg){

    this.ui=arg
    console.log(arg)
  }
  ngOnChanges(): void {

  }
}
