import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/Entites/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = 'http://192.168.0.17:81/api/';

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ListResponseModel<Brand>> {
    let newUrl = this.apiUrl + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newUrl);
  }
}
