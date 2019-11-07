import { Component, OnInit } from '@angular/core';
import { news } from 'src/app/models/news';
import { newsdata } from 'src/app/demodata/newsdata';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  layout:string="grid";
  newsdata:news[];
  constructor() { }

  ngOnInit() {
    this.newsdata=newsdata;
  }

}
