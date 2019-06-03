export class Quotes {

  public content: string;
  public user: string;
  public author: string;

  public upvote: number;
  public downvote: number;
  public totalvote: number=this.upvote+this.downvote;
  public dateentered: Date;
  public duration: any;
  public maximum:number=1;
  public i: number
  day: any;
  hour: any;
  minutes: any;
  seconds: any;

  constructor(content: string, person: string, author: string, date: Date) {
        this.content = content;
        this.user = person;
        this.author = author;
        this.dateentered = date;

        this.upvote = 0;
        this.downvote = 0;



  }


}
