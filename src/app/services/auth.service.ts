import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';
import { Statics } from './statics';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = Statics.ApiUrl + 'auth/';

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
