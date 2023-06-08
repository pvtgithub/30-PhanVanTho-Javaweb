import { Component } from '@angular/core';
import { faRemove, faPen } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from 'src/app/services/theme.service';
@Component({
  selector: 'app-list-theme',
  templateUrl: './list-theme.component.html',
  styleUrls: ['./list-theme.component.css']
})
export class ListThemeComponent {
  p: number = 1;
  ids: number[] = [];
  listTheme: any = []
  faRemove: any = faRemove;
  faPen: any = faPen;


  constructor(private themeService: ThemeService) {
    this.getAll()
  }

  getAll(): void {
    this.themeService.allTheme().subscribe((data: any) => {
      this.listTheme = data
      console.log(this.listTheme);
    })
  }

  delete(id: number): void {
    this.ids.push(id)
    const rs = confirm("ban co muon xoa")
    if (rs) {
      this.themeService.deleteThemeById(this.ids).subscribe(() => {
        this.getAll();
        alert("Đã xóa")
        this.ids = []
      });
    }
  }


}
