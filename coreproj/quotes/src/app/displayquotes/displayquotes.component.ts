import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {EnterquotesComponent} from '../enterquotes/enterquotes.component';
import {BackgroundDirective} from '../background.directive';
import {Form} from '@angular/forms';
import { FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {max} from 'rxjs/operators';

@Component({
  selector: 'app-displayquotes',
  templateUrl: './displayquotes.component.html',
  styleUrls: ['./displayquotes.component.css']
})
export class DisplayquotesComponent extends EnterquotesComponent implements OnInit{

    @Input() users;
    @ViewChild('contentr') rt: ElementRef;
    maximum: number=0;
    max: number=0

  constructor() {

  }

  ngOnInit() {
    console.log(this.users.length)
  }
  maxi(i) {


    for (let j = 0; j < this.users.length; j++) {
      if (this.users[i].totalvote >= this.maximum) {
        this.maximum = this.users[i].totalvote;
      } else {

      }
      return
    }

  }
  maxx(i) {


    for (let j = 0; j < this.users.length; j++) {
      if (this.users[i].totalvote >= this.max) {
        this.max = this.users[i].totalvote;
      } else {

      }

      return
    }

  }
  //  convertMS( mill , mill2 ) {
  //   let day
  //    let hour
  //    let minute
  //    let seconds;
  //
  //   seconds = Math.floor(mill / 1000);
  //   minute = Math.floor(seconds / 60);
  //   seconds = seconds % 60;
  //   hour = Math.floor(minute / 60);
  //   minute = minute % 60;
  //   day = Math.floor(hour / 24);
  //   hour = hour % 24;
  //    let seconds2 = Math.floor(mill2 / 1000);
  //    let minute2 = Math.floor(seconds2 / 60);
  //    seconds2 = seconds2 % 60;
  //    let hour2 = Math.floor(minute2 / 60);
  //    minute2 = minute2 % 60;
  //    let day2= Math.floor(hour2 / 24);
  //    hour2 = hour2 % 24;
  //
  //    if(seconds2 - seconds <= 60) {
  //      return console.log(mill., 'seconds ago ');
  //    }
  //    else if ((minute2 - minute) <= 60) {
  //      return console.log(minute - minute, 'minutes ago ');
  //    }
  //    else if ((hour2 - hour) <= 24) {
  //      return console.log(hour2 - hour, 'hours ago ');
  //    }
  //    else{
  //      return console.log(day2 - day, ' days ');
  //    }
  //
  // }
  // convertMSS(date, date1){
  //   // let day = Math.floor(date.getHours() / 24);
  //   // let day2 = Math.floor(date1.getHours() / 24)
  //   // if((date.getSeconds() - date1.getSeconds() <= 60) && (date.getSeconds() - date1.getSeconds() >= 0)){
  //   //   return console.log(date.getSeconds() - date1.getSeconds(), 'seconds ago ');
  //   // }
  //   // else if((date.getMinutes() - date1.getMinutes() <= 60) && (date.getMinutes() - date1.getMinutes()) >= 0)){
  //   //   return console.log(date.getMinutes() - date1.getMinutes(), ' minutes ago ')
  //   // }
  //   // else if((date.getHours() - date1.getHours() <= 24) && (date.getHours() - date1.getHours() >= 0)){
  //   //   return console.log(date.getHours() - date1.getHours() , ' hours ago ')
  //   // }
  //   // else{
  //   //   return console.log(day-day2 , ' days ago ')
  //   // }
  //
  // }
  upvote(i){
    let maximum = 0
    let date = new Date()
    this.users[i].upvote++
    console.log(this.users[i].upvote)
    console.log(this.users[i].totalvote)
    this.users[i].totalvote = this.users[i].downvote +  this.users[i].upvote
    console.log(this.users.length)
    this.maxi(i);
    console.log( this.users[i].datentered)
    console.log(date)
    console.log('Initially is ' + this.users[i].dateentered.getTime())
    console.log('But now is ' + date.getTime())
    // this.convertMSS(date,this.users[i].dateentered)
    // this.convertMS(this.users[i].dateentered.getTime(), date)
    console.log('Max upvote is ' + this.maximum)



  }

  downvote(i){
    this.maximum = 0
    this.users[i].downvote++


    this.users[i].totalvote = this.users[i].downvote +  this.users[i].upvote
    this.maxi(i)
    console.log(this.users[i].downvote)
    console.log(this.users.length)
    console.log('Max downvote is ' + this.max)



  }
  remove(i){
    this.users.pop(i)
  }
}
