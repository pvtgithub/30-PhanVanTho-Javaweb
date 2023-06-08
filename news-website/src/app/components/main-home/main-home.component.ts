import { Component, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent {
  newsBestView  : any 
  fiveNews  : any 
  constructor (private ctgService : CategoryService,private newsService : NewsService) {
    this.newsService.getNewsBestView().subscribe((data) =>{
      this.newsBestView = data
    })
    this.newsService.getFiveNewsByCodeTheme('dan-sinh').subscribe((data) => {
      this.fiveNews = data
      console.log(this.fiveNews);
      
    })
  }
}
