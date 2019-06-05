import {Component, OnInit, ViewChild} from '@angular/core';
import {QuotesModel} from '../quotes.model';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-enterquotes',
  templateUrl: './enterquotes.component.html',
  styleUrls: ['./enterquotes.component.css']
})
export class EnterquotesComponent implements OnInit {
@ViewChild('forms') myForm;
  public userdata: QuotesModel [] = [];
  public title: string = "Quote"

  constructor() {
  }

  ngOnInit() {
  }

  submitted(form: NgForm, content, user, author) {


    if (!form.valid) {

      console.log("Enter your name");


    } else {


      let date = new Date()

      this.userdata.push(new QuotesModel(content, user, author, date))

      console.log(form);
      console.log(this.userdata[0].content, this.userdata[0].user,this.userdata[0].author,this.userdata[0].dateentered);
      console.log(this.userdata.length)
      form.resetForm()
    }


  }

}
