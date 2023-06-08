import { Component } from '@angular/core';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';
import { NewsService } from 'src/app/services/news.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-box-category',
  templateUrl: './box-category.component.html',
  styleUrls: ['./box-category.component.css']
})
export class BoxCategoryComponent {
  faDot: any = faDotCircle;

  allThemeKinhDoanh : any;
  allThemeKhoaHoc : any;
  allThemeGiaiTri : any;

  twoNews: any = [];
  threeNews: any = [];



  constructor(private ctg: CategoryService, private news : NewsService){
    this.ctg.getThemeByCategoryId(3).subscribe((data)=>{
      this.allThemeKinhDoanh = data
      console.log(this.allThemeKinhDoanh);
      
    })

    this.ctg.getThemeByCategoryId(4).subscribe((data)=>{
      this.allThemeKhoaHoc = data
    })

    this.ctg.getThemeByCategoryId(5).subscribe((data)=>{
      this.allThemeGiaiTri = data
    })

    this.news.getTwoNewsByCategoryId(3).subscribe((data) => {
      this.twoNews.push(data)
    })

    this.news.getTwoNewsByCategoryId(4).subscribe((data) => {
      this.twoNews.push(data)
    })

    this.news.getTwoNewsByCategoryId(5).subscribe((data) => {
      this.twoNews.push(data)
    })

    this.news.getThreeNewsByCodeTheme('chung-khoan').subscribe((data)=>{
      this.threeNews.push(data)
    })
    this.news.getThreeNewsByCodeTheme('tin-tuc').subscribe((data)=>{
      this.threeNews.push(data)
    })
    this.news.getThreeNewsByCodeTheme('gioi-sao').subscribe((data)=>{
      this.threeNews.push(data)
    })
  }
}
