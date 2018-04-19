import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn = false;
  currentUser = "";

  constructor(private authService: AuthService) {
    var isCollapsed = false;
    this.isLoggedIn = authService.isLoggedIn();
  }

  ngOnInit() {
  }

  alerts: any = [];
  model = {};

  onClosedAlert(dismissedAlert: any) {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
    //alerts the user when they're already signed in
  login() {
    if (localStorage.getItem('token') != null) {
      this.alerts = [{
        type: 'danger',
        msg: 'User is already signed in!'
      }];
    }
    //alerts the user when they're already logged in
    else {
      this.authService.login(this.model).subscribe(data => {
        this.model = data;
        this.alerts = [{
          type: 'success',
          msg: 'Welcome, you are now logged in!'
        }]
      },
      //alerts the user if the username and password is wrong
        error => this.alerts = [{
          type: 'danger',
          msg: 'Wrong username and/or password'
        }]);
    }
  }
    //alerts the user when they have signed out.
  logout() {
    this.authService.logout();
    if (localStorage.getItem('token') == null) {
      this.alerts = [{
        type: 'success',
        msg: 'You have now signed out!'
      }];
    }
    //Alerts the user when they can't sign out
    else {
      this.alerts = [{
        type: 'danger',
        msg: 'Cannot sign out at this time!'
      }];
    }
  }

}
