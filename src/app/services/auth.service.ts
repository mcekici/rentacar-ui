import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponseModel } from '../models/dataResponseModel';
import { Admin } from '../models/Entites/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://192.168.0.17:81/api/auth/';

  constructor(private httpClient: HttpClient) { }

  adminLogin(admin:Admin){
    let newUrl = this.apiUrl + "login/admin"
    return this.httpClient.post<Admin>(newUrl,admin);
  }

  isAuthenticated(){
    if(localStorage.getItem("userName")){
      return true;
    }
    return false;
  }
}
