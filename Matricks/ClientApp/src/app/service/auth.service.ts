import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  private loggedIn : boolean = false;

  constructor() { }

  isReady(): boolean {

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


}
