import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {
  
  categoryCurrent : any;

  myForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });
  constructor(private categoryService: CategoryService, private route : ActivatedRoute) { 
    const id = this.route.snapshot.params["id"]

    this.categoryService.getOneCategoryById(id).subscribe((data) => {
      this.categoryCurrent = data
    })
  }

  onSubmit(id : number){
    this.categoryService.putCategory(id, this.myForm.value).subscribe(() => {
      alert("Cập nhật thành công!")
    })
  }
}
