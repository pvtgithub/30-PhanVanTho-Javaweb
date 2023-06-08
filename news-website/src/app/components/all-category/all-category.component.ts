import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faMarker, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-all-category',
  templateUrl: './all-category.component.html',
  styleUrls: ['./all-category.component.css']
})
export class AllCategoryComponent {

  @Output() checkAll: EventEmitter<any> = new EventEmitter();
  public fa: any = {
    faMark: faMarker,
    faXmark: faXmarkCircle
  }
  public allCategory: Category[] = [];

  constructor(private category: CategoryService) { }

  public renderAll() {
    this.checkAll.emit()
  }

  ngOnInit() {
    this.category.getAllCategory().subscribe((data) => {
      this.allCategory = data
    })

  }
}
