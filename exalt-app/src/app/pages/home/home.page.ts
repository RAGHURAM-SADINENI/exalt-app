import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/models/news';
import { newsdata } from 'src/app/demodata/newsdata';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  firstitem:news;
  newsdata:news[];
  constructor() {}
  ngOnInit(){
    this.firstitem=newsdata.shift();
    this.newsdata=newsdata;
  }
}
