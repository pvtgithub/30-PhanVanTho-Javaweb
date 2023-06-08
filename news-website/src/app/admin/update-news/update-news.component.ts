import { Component } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemeService } from 'src/app/services/theme.service';
import { NewsService } from 'src/app/services/news.service';
import { faRemove, faPen } from '@fortawesome/free-solid-svg-icons';
import { TagService } from 'src/app/services/tag.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent {
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
  newsCurrent: any;
  idCategoryCurrent: any

  constructor(private ctg: CategoryService, private theme: ThemeService, private news: NewsService, private tag: TagService, private route: ActivatedRoute) {
    this.ctg.getAllCategory().subscribe((data) => {
      this.allCategory = data
    })

    this.ctg.getThemeByCategoryId(this.categoryId).subscribe((data) => {
      this.themes = data
    })

    this.tag.getAllTag().subscribe((data) => {
      this.allTag = data;
    })

    const id = this.route.snapshot.params["id"]

    this.news.getNewsById(id).subscribe((data) => {
      this.newsCurrent = data
      this.tagNames = data.listTagsById

      this.ctg.getCategoryByThemeId(data.themeId).subscribe((data) => {
        this.idCategoryCurrent = data.id - 1
        this.updateTheme(data.id)
      })

      for (let i = 0; i < this.tagNames.length; i++) {
        const element = this.tagNames[i];
        this.tagIds.push(element.id);
      }
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

    this.news.updateNews(this.newsCurrent.id, this.myForm.value).subscribe(() => {
      alert("Cập nhật bài viết thành công!")
    })
  }

  updateTheme(id: number) {
    this.ctg.getThemeByCategoryId(id).subscribe((data) => {
      this.themes = data
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

  deleteTag(i: any) {
    const index = this.tagIds.indexOf(i.id);
    this.tagIds.splice(index, 1)

    const indexName = this.tagNames.indexOf(i)
    this.tagNames.splice(indexName, 1)

  }
}
