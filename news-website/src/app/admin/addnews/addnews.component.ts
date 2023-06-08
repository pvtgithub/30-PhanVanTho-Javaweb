import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';
import { NewsService } from 'src/app/services/news.service';
import { faRemove, faPen } from '@fortawesome/free-solid-svg-icons';
import { TagService } from 'src/app/services/tag.service';


@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent {
  faRemove: any = faRemove;
  allCategory: any;
  categoryId: number = 1;
  themeId: number = 1;
  themes: any
  selectedItem: any
  arrImg: any = [];
  allTag: any = [];
  tagIds: number[] = [];
  tagNames: any[] = [];

  constructor(private ctg: CategoryService, private theme: ThemeService, private news: NewsService, private tag: TagService) {
    this.ctg.getAllCategory().subscribe((data) => {
      this.allCategory = data
    })

    this.ctg.getThemeByCategoryId(this.categoryId).subscribe((data) => {
      this.themes = data
    })

    this.tag.getAllTag().subscribe((data) => {
      this.allTag = data;
    })
  }

  myForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    code: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    images: new FormControl('', [
      Validators.required,
    ]),
    tagIds: new FormControl(),
    categoryId: new FormControl(''),
    themeId: new FormControl('')
  });

  onSubmit() {
    this.myForm.value.categoryId = this.categoryId.toString();
    this.myForm.value.themeId = this.themeId.toString();
    this.myForm.value.images = this.arrImg;
    this.myForm.value.tagIds = this.tagIds;

    this.news.postNews(this.myForm.value).subscribe((data) => {
      alert("Them thanh cong")
      this.myForm.reset()
    })
  }

  changeCategory(event: any) {
    this.categoryId = event.target.selectedIndex + 1;

    this.ctg.getThemeByCategoryId(this.categoryId).subscribe((data) => {
      this.themes = data
    })

  }

  changeTheme(ev: any) {
    const name = ev.target.value;
    let themeByName: any;
    this.theme.getThemeByName(name).subscribe((data) => {
      themeByName = data
      this.themeId = themeByName.id;
    })
  }

  changeImg(event: any) {
    this.arrImg[0] = event.target.value
  }

  changeTag(event: any) {
    const id: number = event.target.value;
    const checkContains = this.tagIds.includes(id);
    
    if (!checkContains) {
      this.tagIds.push(id)
      this.tag.getTagById(id).subscribe((data) => {
        this.tagNames.push(data)
      })
    }

  }

  deleteTag( i: any) {
    const index = this.tagIds.indexOf(i.id);
    this.tagIds.splice(index,1)

    const indexName = this.tagNames.indexOf(i)
    this.tagNames.splice(indexName,1)
    
  }

}
