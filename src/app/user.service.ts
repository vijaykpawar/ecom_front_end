import { Injectable } from '@angular/core';
import{Router} from '@angular/router';
import{Http, Headers, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/ECommerce/user';

  constructor(
    private router: Router,
    private http: Http
  ) { }

  login(email: string, password: string) {
    const body = {
      email: email,
      password: password
    };

    const header = new Headers({'Content-Type': 'application/json'});
    const requestOption = new RequestOptions({headers: header});

    return this.http.post(this.url + '/login', body, requestOption);
  }

  register(firstName:string,lastName:string,userName: string,email: string,password: string, phone: string) {
    const body = {
      'firstName':firstName,
      'lastName':lastName,
      'username':userName,
      'email': email,
      'password': password,
      'phone': phone
    };

    const header = new Headers({'Content-Type': 'application/json'});
    const requestOption = new RequestOptions({headers: header});

    return this.http.post(this.url + '/register', body, requestOption);
  }
}
