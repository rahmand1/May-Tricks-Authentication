import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model = { username: '', password: '', password2: '', interests:'' };


  constructor() { }

  ngOnInit() {
  }

  register() {

    console.log(this.model.username + this.model.password + ' New user registration' + this.model.interests);
  }

}
