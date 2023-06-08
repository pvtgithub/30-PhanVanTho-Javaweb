import { Component } from '@angular/core';
import { faRemove, faPen } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent {

   p: number = 1;
    ids: number[] = [];
    listCategory: any = []
    faRemove: any = faRemove;
    faPen: any = faPen;
    constructor(private categoryService: CategoryService) {
      this.getAll()
    }

    getAll(){
      this.categoryService.getAllCategory().subscribe((data) => {
        this.listCategory = data
      })
    }

    delete(id : number){
      const rs = confirm("Xóa thể loại?")
      if(rs) {
        this.ids.push(id)
        this.categoryService.deleteCategory(this.ids).subscribe(() => {
          alert("Xóa thành công")
          this.ids = [];
          this.getAll();
        })
      }
    }
}
