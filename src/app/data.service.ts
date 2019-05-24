import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})



export class DataService {
  articles: any[] = [];



  constructor() { }

  AddArticle = (title: any, author: any, text: any, date: any) => {

    this.articles.push({Title: title, Author: author, Text: text, Date: date });
    alert(" Article inserted correctly!");
    console.log("Articolo aggiunto: " + this.articles[0].Date);
    console.log(this.articles);

  }

  GetArticles() {
    return this.articles;
  }

}
