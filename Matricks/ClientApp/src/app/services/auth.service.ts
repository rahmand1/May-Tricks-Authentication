import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/Users'
import { AuthUser } from '../models/AuthUser';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()

export class AuthService {
baseUrl = 'http://lochttp://localhost:52985/api/auth/login';
  constructor(private http: HttpClient, private jwtHelperService: JwtHelperService) {}


  login(user) {
    return this.http.post<AuthUser>(this.baseUrl + '/auth/login', user)
      .map((result: AuthUser) => { 
        if (result) {
    localStorage.setItem('token', result.tokenString);
    localStorage.setItem('user', JSON.stringify(user));
    console.log("Never");
      }
        return result;
  }
);
  }
  isLoggedIn() {
    var token = localStorage.getItem('token');
    console.log("token: " + token); // testing

    var tokenExpired = this.jwtHelperService.isTokenExpired(localStorage.getItem('token'));
    console.log("tokenExpired: " + tokenExpired); // testing
    return !tokenExpired;
  }
    logout() {
        localStorage.clear();
        console.log("token after clear(): " + localStorage.getItem('token')); // testing
  }

    register(userModel) {
        console.log('In register()!');
        var registerUserModel = { 'UserName': userModel.UserName, 'Password': userModel.Password }
        const contentHeader = new HttpHeaders({ 'Content-type': 'application/json' });
        return this.http.post((this.baseUrl + 'register'), registerUserModel, { headers: contentHeader });
  }


}
