import { Component } from '@angular/core';
import { faRemove,faPen } from '@fortawesome/free-solid-svg-icons';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-adminator',
  templateUrl: './adminator.component.html',
  styleUrls: ['./adminator.component.css']
})
export class AdminatorComponent {
  faRemove: any = faRemove;
  faPen: any = faPen;
  newsList : any;
  p : number = 1
  ids: number [] = []

  constructor(private newsService: NewsService){}

  getAll(){
    this.newsService.getAllNews().subscribe((data) =>{
      this.newsList = data;
    })
  }

  ngOnInit(){
    this.getAll()
  }

  delete(id : number){
      const rs = confirm("Bạn có muốn xóa")
      if(rs){
        this.ids.push(id)
        this.newsService.deleteNews(this.ids).subscribe(() => {
          alert("Đã xóa")
          this.getAll()
          this.ids = []
        })
      }
  }
}
