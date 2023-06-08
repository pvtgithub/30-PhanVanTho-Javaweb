import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  public HTTP_REQUEST: string = 'http://localhost:8082/';
  constructor(private httpClient: HttpClient) { }

  public getAllTag() {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}tag`)
  }

  public getTagById(id : number) {
    return this.httpClient.get<any>(`${this.HTTP_REQUEST}getTagById?id=${id}`)
  }
}
