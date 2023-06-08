import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { SearchComponent } from './pages/search/search.component';
import { InformationComponent } from './pages/users/information/information.component';
import { OpinionComponent } from './pages/users/opinion/opinion.component';
import { NewsSaveComponent } from './pages/users/news-save/news-save.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ReplaceDatePipe } from './pipes/replace-date.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AllCategoryComponent } from './components/all-category/all-category.component';
import { StyleColorDirective } from './directives/style-color.directive';
import { ThemeitemComponent } from './components/themeitem/themeitem.component';
import { HttpClientModule } from '@angular/common/http';
import { MyhoverDirective } from './directives/myhover.directive';
import { MainComponent } from './components/main/main.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ArticleComponent } from './components/article/article.component';
import { ItemNewsComponent } from './components/item-news/item-news.component';
import { BoxCategoryComponent } from './components/box-category/box-category.component';
import { StyleColorWhenHoverDirective } from './directives/style-color-when-hover.directive';
import { ScrollListenerDirective } from './directives/scroll-listener.directive';
import { SetFixedWhenScrollDirective } from './directives/set-fixed-when-scroll.directive';
import { NewsComponent } from './pages/news/news.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminatorComponent } from './admin/adminator/adminator.component';
import { HeaderAdminComponent } from './admin/header/header.component';
import { MainAdminComponent } from './admin/main/main.component';
import { ListnewsComponent } from './admin/listnews/listnews.component';
import { ListThemeComponent } from './admin/list-theme/list-theme.component';
import { AddthemeComponent } from './admin/addtheme/addtheme.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { UpdateThemeComponent } from './admin/update-theme/update-theme.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { AddnewsComponent } from './admin/addnews/addnews.component';
import { AddcategoryComponent } from './admin/addcategory/addcategory.component';
import { ListcategoryComponent } from './admin/listcategory/listcategory.component';
import { UpdateCategoryComponent } from './admin/update-category/update-category.component';
import { UpdateNewsComponent } from './admin/update-news/update-news.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    ThemeComponent,
    SearchComponent,
    InformationComponent,
    OpinionComponent,
    NewsSaveComponent,
    HeaderComponent,
    FooterComponent,
    ReplaceDatePipe,
    PageNotFoundComponent,
    AllCategoryComponent,
    StyleColorDirective,
    ThemeitemComponent,
    MyhoverDirective,
    MainComponent,
    NavigationComponent,
    ArticleComponent,
    ItemNewsComponent,
    BoxCategoryComponent,
    StyleColorWhenHoverDirective,
    ScrollListenerDirective,
    SetFixedWhenScrollDirective,
    NewsComponent,
    SidebarComponent,
    AdminatorComponent,
    HeaderAdminComponent,
    MainAdminComponent,
    ListnewsComponent,
    ListThemeComponent,
    AddthemeComponent,
    UpdateThemeComponent,
    MainHomeComponent,
    AddnewsComponent,
    AddcategoryComponent,
    ListcategoryComponent,
    UpdateCategoryComponent,
    UpdateNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
