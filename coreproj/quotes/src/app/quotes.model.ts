export class QuotesModel{
  public content: string;
  public user: string;
  public author: string;
  public dateentered: Date;

  public upvote: number;
  public downvote: number;
  public totalvote:number;






  constructor(content: string,  user: string, author: string, date: Date){
    this.content=content;
    this.user=user;
    this.author=author
    this.dateentered=date


    this.downvote=0
    this.upvote=0

  }















}
