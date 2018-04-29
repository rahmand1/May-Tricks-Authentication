import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  //isLoggedIn = false;
  currentUser = "";

  constructor(private authService: AuthService) {
    this.currentUser = authService.whoami();
  }


  /*
  constructor(private authService: AuthService) {
    var isCollapsed = false;
    this.isLoggedIn = authService.isLoggedIn();
  }
  */
 
  ngOnInit() {
  }

  alerts: any = [];
  model = {};

  onClosedAlert(dismissedAlert: any) {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }
  //alerts the user when they're already signed in


  VerifyLogin() {
    return !this.authService.IsExpired();
  }

  
  login() {
    console.log(this.model);
    this.authService.login(this.model).subscribe(data => console.log(data), error => console.log(error));
    //console.log(localStorage.getItem('user'));
    //console.log(localStorage.getitem('token'));
    return this.VerifyLogin();

  }
  //alerts the user when they have signed out.
  logout() {
    
    this.authService.LogOut();
    console.log('Logged out!');
  }
  
}
