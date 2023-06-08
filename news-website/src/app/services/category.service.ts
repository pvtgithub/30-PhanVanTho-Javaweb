import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public HTTP_REQUEST: string = 'http://localhost:8082/';
  constructor(private httpClient: HttpClient) { }



  public getThemeByCategoryId(id: number) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}theme?categoryId=${id}`)
  }

  public getNewsByCategoryId(id: number) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}newsByCategory?id=${id}`)
  }


  public getCategoryByCode(code: string) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}findCategoryByCode?code=${code}`)
  }

  //Lấy danh sách theme thông qua code category
  public getThemesByCode(category: string) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}themeByCode?code=${category}`)
  }

  //lấy bài viết có nhiêu lượt xem nhất theo code category:
  public getNewsBestViewByCodeCategory(category: string) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getNewsBestViewByCodeCategory?code=${category}`)
  }

  //Thêm thể loại
  public postCategory(data: any) {
    return this.httpClient.post<any>(`${this.HTTP_REQUEST}category`, data)
  }

  //update the loai
  public putCategory(id: number, data: any) {
    return this.httpClient.put<any>(`${this.HTTP_REQUEST}category/${id}`, data)
  }

  //Xoa the loai  
  public deleteCategory(ids: number[]) {
    return this.httpClient.delete<any>(`${this.HTTP_REQUEST}category`, { body: ids })
  }

  //lay tat ca the loai
  public getAllCategory() {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}categoryAll`)
  }

  //lay 1 category by id
  public getOneCategoryById(id: number) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getOneCategoryById?id=${id}`)
  }

  //Lấy category by themeid:
  public getCategoryByThemeId(id : number){
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getCategoryByThemeId?id=${id}`)
  }
}
