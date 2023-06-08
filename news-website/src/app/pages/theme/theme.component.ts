import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { NewsService } from 'src/app/services/news.service';
@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  public themes: string[] = []
  public tenNews: any[] = []
  newsBestView: any
  constructor(private route: ActivatedRoute, private category: CategoryService, private news: NewsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const code = params['code'];
      const category = params['category']
      console.log("code category: "+ category);
      
      this.category.getThemesByCode(category).subscribe(
        (data) => {
          this.themes = data
          console.log("themes: "+ this.themes);
          
        }
      )

      this.news.getNewsBestViewByCodeTheme(code).subscribe((data) => {
        this.newsBestView = data
      })

      this.news.getTenNewsByCodeTheme(code).subscribe((data) => {
        this.tenNews = data
      })
    });
  }




}
