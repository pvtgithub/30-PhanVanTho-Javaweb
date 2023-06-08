import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { NewsComponent } from './pages/news/news.component';
import { AdminatorComponent } from './admin/adminator/adminator.component';
import { ListThemeComponent } from './admin/list-theme/list-theme.component';
import { AddthemeComponent } from './admin/addtheme/addtheme.component';
import { UpdateThemeComponent } from './admin/update-theme/update-theme.component';
import { AddnewsComponent } from './admin/addnews/addnews.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { ListcategoryComponent } from './admin/listcategory/listcategory.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';
import { UpdateNewsComponent } from './admin/update-news/update-news.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "admin", component: AdminatorComponent},
  {path: "listtheme", component: ListThemeComponent},
  {path: "listnews", component: AdminatorComponent},
  {path: "addtheme", component: AddthemeComponent},
  {path: "addnews", component: AddnewsComponent},
  {path: "addcategory", component: AddcategoryComponent},
  {path: "listcategory", component: ListcategoryComponent},
  {path: "updatecategory/:id", component: UpdateCategoryComponent},
  {path: "updatetheme/:id", component: UpdateThemeComponent},
  {path: "updatenews/:id", component: UpdateNewsComponent},
  {path: 'news/:news',component: NewsComponent},
  {
    path: ':category', component: CategoryComponent
  },
  { path: ':category/:code', component: ThemeComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
