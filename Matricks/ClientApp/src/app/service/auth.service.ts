import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { AuthUser } from '../models/authuser';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment'; // Cool!!
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';


@Injectable()
export class AuthService {

  private loggedIn: boolean = false;

  baseUrl = 'http://localhost:50758'; 


  constructor(private http: HttpClient, private JwtHelperService: JwtHelperService, private _data : DataService) { }

  /* isReady(): boolean {

    return this.loggedIn;
      //return true;
    //else return false;
  }

  setLogin(userName: string) {

    this.loggedIn = true;

  }

  setLogout() {

    this.loggedIn = false;
  }

  */


  whoami() {

    return localStorage.getItem('user');

  }

  login(user) {
    return this.http.post<AuthUser>(this.baseUrl + '/api/auth/login', user).map((result: AuthUser) => {
      if (result) {
        localStorage.setItem('token', result.tokenString);
        localStorage.setItem('user', JSON.stringify(result.userName));
        console.log('JSON LOGIN FOR Username ' + JSON.stringify(result.userName) + ' without beef ' + result.userName);
        this._data.updateCurrentUser(result.userName +'');
        console.log(this._data.seeUser);
      } return result;
    });
  } 


  IsExpired() {
    return this.JwtHelperService.isTokenExpired();
  }


  LogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log("Logout Successful");

  }




}
