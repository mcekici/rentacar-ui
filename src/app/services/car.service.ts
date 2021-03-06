import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../models/dataResponseModel';
import { CarDto } from '../models/Dtos/carDto';
import { Car } from '../models/Entites/car';
import { ListResponseModel } from '../models/listResponseModel';
import { Statics } from './statics';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = Statics.ApiUrl + 'cars/';

  constructor(private httpClient: HttpClient) { }

  
  getAllDto():Observable<ListResponseModel<CarDto>> {
    let newUrl = this.apiUrl + "getalldto"
    return this.httpClient.get<ListResponseModel<CarDto>>(newUrl);
  }

  getAll():Observable<ListResponseModel<Car>> {
    let newUrl = this.apiUrl + "getall"
    return this.httpClient.get<ListResponseModel<Car>>(newUrl);
  }

  getDto(carId:number):Observable<DataResponseModel<CarDto>> {
    let newUrl = this.apiUrl + "getdto?carId=" + carId;
    return this.httpClient.get<DataResponseModel<CarDto>>(newUrl);
  }

  get(carId:number):Observable<DataResponseModel<Car>> {
    let newUrl = this.apiUrl + "getdto?carId=" + carId;
    return this.httpClient.get<DataResponseModel<Car>>(newUrl);
  }

}
