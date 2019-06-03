import {Component, ElementRef, OnInit, ViewChild,Input,Output} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Quotes} from '../thequotes/quotes.model';
import {FinalquotesService} from '../finalquotes.service';

@Component({
  selector: 'app-finalquote',
  templateUrl: './finalquote.component.html',
  styleUrls: ['./finalquote.component.css']
})
export class FinalquoteComponent implements OnInit {



  @ViewChild('forms') formssubmit: NgForm;
  @ViewChild('quote') thequote: ElementRef;






  count: number = 10552;
  quoteinput:string;
  titles: number =522;


  usernameValid: boolean = true;

  public userdata: Quotes[] = []
  constructor() {

  }

  ngOnInit() {
  }







  submitted(form: NgForm, username, quote: string, user: string,author: string) {

    let Quote= quote;
    const Username= user;
    const Author= author;
    const dateentered=date;
    if(quote.charAt(0)==='"'){
      Quote = Quote.substr(1)
    }
    else{

    }





    if(username.invalid) {
      console.log("Enter your username");
      this.usernameValid = false;

    }
    else{
      var date = new Date();

      this.userdata.push(new Quotes(Quote, Username , Author, date))

      this.userdata[0].totalvote=0
      this.usernameValid= true;
      console.log(this.userdata[0].content)
      console.log(this.userdata[0].user)
      console.log(this.userdata[0].author)
      console.log(this.userdata.length)

      console.log(this.userdata[0].dateentered)
      console.log(this.userdata[0].totalvote)

    }

  };

}
