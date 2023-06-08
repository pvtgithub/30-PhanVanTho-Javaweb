import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  public newsDetail: any;
  public formatedDate: string | undefined;
  public fiveNews : any[] = [];

  constructor(private newsService: NewsService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(async params => {
      const news = params['news'];
      this.newsDetail = await this.newsService.getNewsByCode(news).toPromise();

      const dateObj = new Date(this.newsDetail.createdDate);
      this.formatedDate = dateObj.toLocaleString();

      this.fiveNews = await this.newsService.getFiveNewsByCodeTheme(this.newsDetail.themeCode).toPromise();
      console.log(this.fiveNews);
      
    })
  }
}
