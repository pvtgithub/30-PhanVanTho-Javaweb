import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @Input() newsBestView: any;
  threeNews: any = []
  constructor(private news: NewsService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      const category = params['category'];
      this.news.getThreeNewsByCodeCategory(category).subscribe(data => {
        this.threeNews = data
      })
    });
  }
}
