import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private httpClient: HttpClient) { }

  public HTTP_REQUEST: string = 'http://localhost:8082/';

  public postTheme(data: any) {
    return this.httpClient.post<any>(`${this.HTTP_REQUEST}theme`,data)
  }

  public putTheme(data: any,id: number) {
    return this.httpClient.put<any>(`${this.HTTP_REQUEST}theme/${id}`,data)
  }

  public allTheme() : any{
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}allTheme`)
  }

  public deleteThemeById(ids: number[]) : any{
    return this.httpClient.delete<any>(`${this.HTTP_REQUEST}theme`, { body: ids })
  }

  public getOneThemeById(id : number){
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}oneTheme?themeId=${id}`)
  }

  public getThemeByName(name : string){
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getThemeByName?name=${name}`)
  }

}
