import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Entites/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = 'http://192.168.0.17:81/api/';

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ListResponseModel<Category>> {
    let newUrl = this.apiUrl + "categories/getall"
    return this.httpClient.get<ListResponseModel<Category>>(newUrl);
  }
}
