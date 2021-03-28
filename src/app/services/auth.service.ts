import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponseModel } from '../models/dataResponseModel';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://192.168.1.111:81/api/auth/';

  constructor(private httpClient: HttpClient) { }

  login(model:LoginModel){
    let newUrl = this.apiUrl + "login"
    return this.httpClient.post<TokenModel>(newUrl,model);
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    return false;
  }
}
