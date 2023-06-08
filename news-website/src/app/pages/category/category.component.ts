import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  public themes: string[] = []
  public idCategory: number = -1;
  public newsBestView: any;
  public tenNews: any = []
  constructor(private router: Router, private category: CategoryService, private route: ActivatedRoute, private news: NewsService) { }

  ngOnInit() {
    this.route.params.subscribe(async params => {
      const category = params['category'];
      this.idCategory = await this.findCategory(category);

      this.newsBestView = await this.getNewsBestViewByCodeCategory(category);

      this.news.getTenNewsByCodeCategory(category).subscribe((data) => {
        this.tenNews = data
        console.log(this.tenNews);
      });
      


      this.category.getThemeByCategoryId(this.idCategory).subscribe(
        (data) => {
          this.themes = data
          console.log(this.themes);

        }
      )
    });
  }

  async getNewsBestViewByCodeCategory(category: string) {
    return await this.category.getNewsBestViewByCodeCategory(category).toPromise();
  }

  async findCategory(category: string) {
    try {
      const data = await this.category.getCategoryByCode(category).toPromise();
      return data.id;
    } catch (error) {
      console.log("err")
      this.router.navigate(["/page-not-found"]);
    }
  }


}
