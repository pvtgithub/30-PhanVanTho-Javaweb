import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';
@Component({
  selector: 'app-addtheme',
  templateUrl: './addtheme.component.html',
  styleUrls: ['./addtheme.component.css']
})
export class AddthemeComponent {
  allCategory: any;
  categoryId: number = 1;

  myForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    categoryId: new FormControl('', [
      Validators.required,
    ])
  });
  constructor(private categoryService: CategoryService,private themeService : ThemeService) { }

  changeCategory(event : any){
    this.categoryId = event.target.selectedIndex + 1;
    console.log(this.categoryId);
  }
  onSubmit() {
    this.myForm.value.categoryId = this.categoryId.toString();

    this.themeService.postTheme(this.myForm.value).subscribe((data) => {
      alert("Đã thêm")
      this.myForm.reset();
    })
  }

  ngOnInit() {
    this.categoryService.getAllCategory().subscribe((data) => {
      this.allCategory = data;
    })
  }
}
