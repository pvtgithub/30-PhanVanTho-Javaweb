import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public HTTP_REQUEST: string = 'http://localhost:8082/';
  constructor(private httpClient: HttpClient) { }


  //Lấy thông tin bài viết theo code
  public getNewsByCode(code: string) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getNewsByCode?code=${code}`)
  }

  //Lấy 5 bài viết mới nhất theo theme code: 
  public getFiveNewsByCodeTheme(code: string) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getFiveNewsByCodeTheme?code=${code}`)
  }

  //Lấy bài viết theo trang
  public getNews(page: number, limit: number) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}news?page=${page}&limit=${limit}`)
  }

  

  //lấy 2 bài viết nhiều lượt xem nhất theo idCategory
  public getTwoNewsByCategoryId(id: number) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getTwoNewsByCategoryId?id=${id}`)
  }

  //lay tat ca bai viet
  public getAllNews() {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getAllNews`)
  }

  //Thêm bài viết
  public postNews(data: any) {
    return this.httpClient.post<any>(`${this.HTTP_REQUEST}news`, data)
  }

  //xóa bài viết 
  public deleteNews(id: any){
    return this.httpClient.delete<any>(`${this.HTTP_REQUEST}news`,{body: id})
  }

  //Lấy bài viết theo id
  public getNewsById(id: any){
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getNewsById?id=${id}`)
  }

  //update bai viet
  public updateNews(id : number, data : any){
    return this.httpClient.put<any>(`${this.HTTP_REQUEST}news/${id}`, data)
  }

  //lay 3 bai viet mới nhất có nhiều lượt view nhât
  public getThreeNewsByCodeCategory(code : string){
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getThreeNewsByCodeCategory?code=${code}`)
  }

  //lay 10 bai viet mới nhất 
  public getTenNewsByCodeCategory(code : string){
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getTenNewsByCodeCategory?code=${code}`)
  }

  //lấy bài viết có nhiêu lượt xem nhất theo code theme:
  public getNewsBestViewByCodeTheme(code: string) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getNewsBestViewByCodeTheme?code=${code}`)
  }

  //
  //lay 3 bai viet mới nhất có nhiều lượt xem nhât theo code theme
  public getThreeNewsByCodeTheme(code: string) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getThreeNewsByCodeTheme?code=${code}`)
  }
  //lay 10 bai viet mới nhất theo code theme
  public getTenNewsByCodeTheme(code : string){
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getTenNewsByCodeTheme?code=${code}`)
  }

  public getNewsBestView() {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getNewsBestView`)
  }
}
