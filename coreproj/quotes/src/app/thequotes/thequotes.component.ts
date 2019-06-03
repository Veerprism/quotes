import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Quotes} from './quotes.model';
import {AppComponent} from '../app.component';
import {FinalquoteComponent} from '../finalquote/finalquote.component';
import {FinalquotesService } from '../finalquotes.service';
import { BestquoteDirective  } from '../bestquote.directive';


@Component({
  selector: 'app-thequotes',
  templateUrl: './thequotes.component.html',
  styleUrls: ['./thequotes.component.css']
})
export class ThequotesComponent implements OnInit {


  @Input() parentCount: number;
  @ViewChild('digits') up: ElementRef;
  @Input() quotat: number;
  @Input() username: boolean;
  @Input() users;
  frr = this.quotat;
  public time: any = new Date();
  day: any;
  hour: any;
  minutes: any;
  seconds: any;
  current: any;
  difference:any
  daydifference: any;
  hourdifference: any;
  minutesdifference: any;
  secondsdifference: any;
  no: number;
  yes: number;
  i:number;
  index:number;
  maximum:number=0;
  // users:any;
  // public data: FinalquoteComponent= new FinalquoteComponent()




  constructor() {
    // this.users = this.data.userdata;
  }
 public fr: FinalquotesService = new FinalquotesService();
ngOnInit() {

}

times() {
  this.current = new Date();
  this.day = this.current.getDay();
  this.hour = this.current.getHours();
  this.minutes = this.current.getMinutes();
  this.seconds = this.current.getSeconds();


  }
  convertMS( milliseconds, mill2) {

    let day;
    let hour;
    let minute;
    let seconds;
    seconds = Math.floor(milliseconds / 1000);
    minute = Math.floor(seconds / 60);
    seconds = seconds % 60;
    hour = Math.floor(minute / 60);
    minute = minute % 60;
    day = Math.floor(hour / 24);
    hour = hour % 24;
    let day2;
    let hour2;
    let minute2;
    let seconds2;
    seconds2 = Math.floor(mill2 / 1000);
    minute2 = Math.floor(seconds2 / 60);
    seconds2 = seconds2 % 60;
    hour2 = Math.floor(minute2 / 60);
    minute2 = minute2 % 60;
    day2 = Math.floor(hour2 / 24);
    hour2 = hour2 % 24;

    if ((seconds2 - seconds) >= 60) {
      return console.log((seconds2 - seconds) + ' seconds');
    }
    else if ((minute2 - minute) <= 60){
      return console.log((minute2 - minute) + ' minutes');
    }
    else if ((hour2 - hour) <= 24) {
      return console.log((hour2 - hour) + ' hours');
    }
    else {
      return console.log((day2 - day) + ' days');
    }


  }

  showQuotes() {

    this.times();
    this.secondsdifference = this.seconds - this.users[0].seconds;
    console.log(this.quotat);
    console.log(this.parentCount);
    console.log(this.quotat);
    console.log(this.username);

    console.log(this.current);

    console.log(this.hour);
    console.log(this.minutes);
    console.log(this.seconds);
    console.log(this.users[0].seconds);
    console.log(this.secondsdifference);
    console.log(this.day);



  }

  maxi(i) {

    for (let j=i; j < this.users.length; j++) {

      if(this.users[i].upvote> this.maximum){
        this.maximum= this.users[i].upvote

      }
      return this.maximum

    }
    console.log('Max is ' + this.maximum)



  }


  upvote(i) {
    this.current = new Date();
  this.convertMS(this.users[i].dateentered, this.current)


  console.log(this.users[i].upvote++);
  console.log('Index is after return is '+ this.maxi(i))
    this.i=this.maxi(i)
    console.log(this.users[i].dateentered)




  }
  delete(i){
  this.users.pop(i)
  }
downvote(i) {

  console.log(this.users[i].downvote++);

}
}
