import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-item-news',
  templateUrl: './item-news.component.html',
  styleUrls: ['./item-news.component.css']
})
export class ItemNewsComponent {
  fivenews : any;
  
  constructor(private newsService : NewsService){
    this.newsService.getFiveNewsByCodeTheme('bong-da').subscribe((data) => {
      this.fivenews = data
    })
  }
}
