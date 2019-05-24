import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  
  
  messageForm: FormGroup;
  submitted = false;
  success = false;

  Autore : string;
  Titolo : string;
  Testo : string;

  constructor(private formBuilder: FormBuilder,private data: DataService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;    

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;    
    var dNow = new Date();
    var utc = new Date(dNow.getTime() + dNow.getTimezoneOffset() * 60000)
    var utcdate = (utc.getMonth() + 1) + '/' + utc.getDate() + '/' + utc.getFullYear() + ' ' + (utc.getHours() + 2) + ':' + utc.getMinutes();
    //alert(utcdate + " Article inserted correctly!");    
    //alert(this.Autore + " " + this.Titolo + " " + this.Testo.toString());
    this.data.AddArticle(this.Titolo,this.Autore,this.Testo.toString(), utcdate.toString());
    //this.messageForm.reset();
    
    
    
    
  }

  

}
