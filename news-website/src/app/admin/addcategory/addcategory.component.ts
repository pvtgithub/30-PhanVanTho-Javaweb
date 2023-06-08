import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
  myForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
  });
  constructor(private categoryService: CategoryService, private themeService: ThemeService) { }

  onSubmit() {
    if (!this.myForm.valid) {
      alert("Điền đầy đủ thông tin")
    } else {
      this.categoryService.postCategory(this.myForm.value).subscribe(() => {
        alert('Thêm thành công!')
        this.myForm.reset()
      })
    }
  }

}
