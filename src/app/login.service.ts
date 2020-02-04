import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { Constants } from './utils/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpSer:HttpClient) { }

  isValidUser(user:User){
    return this.httpSer.post(Constants.BASE_URL+"user/valid",user,{responseType:"text"});
  }
}
