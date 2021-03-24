import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/Entites/color';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl = 'http://192.168.0.17:81/api/';

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ListResponseModel<Color>> {
    let newUrl = this.apiUrl + "colors/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newUrl);
  }
}
