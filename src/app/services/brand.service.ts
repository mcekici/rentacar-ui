import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/Entites/brand';
import { Serial } from '../models/Entites/Serial';
import { ListResponseModel } from '../models/listResponseModel';
import { Statics } from './statics';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl = Statics.ApiUrl;

  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ListResponseModel<Brand>> {
    let newUrl = this.apiUrl + "brands/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newUrl);
  }

  getSeries():Observable<ListResponseModel<Serial>>{
    let newUrl = this.apiUrl + "series/getall"
    return this.httpClient.get<ListResponseModel<Serial>>(newUrl);
  }
}
