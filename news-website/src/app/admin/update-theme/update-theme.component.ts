import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-update-theme',
  templateUrl: './update-theme.component.html',
  styleUrls: ['./update-theme.component.css']
})
export class UpdateThemeComponent {
  allCategory: any;
  categoryId: number = 1;
  themeCurrent : any;

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

  constructor(private route : ActivatedRoute,private categoryService: CategoryService, private themeService: ThemeService) {
    this.categoryService.getAllCategory().subscribe((data) => {
      this.allCategory = data;
    })
  }

  ngOnInit(){
    const id = this.route.snapshot.params['id'];
    this.themeService.getOneThemeById(id).subscribe((data) => {
      this.themeCurrent = data
    })
  }

  changeCategory(event: any) {
    this.categoryId = event.target.selectedIndex + 1;
    console.log(this.categoryId);
  }
  onSubmit(id: number) {
    this.myForm.value.categoryId = this.categoryId.toString();

    this.themeService.putTheme(this.myForm.value,id).subscribe((data) => {
      alert("Đã thêm")
      this.myForm.reset();
    })
  }

}
