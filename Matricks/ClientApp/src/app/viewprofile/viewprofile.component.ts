import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {


  profile = {
    "Username": "Fannie",
    "Gender": "female",
    "BirthDate": "1995-05-24",
    "Password": "password",
    "Name": "Fannie",
    "Created": "2017-10-06",
    "LastActive": "2017-10-06",
    "Introduction": "Incididunt reprehenderit aliqua dolore incididunt esse consectetur. Consequat sint minim proident veniam tempor aliqua sint magna exercitation ex esse cillum sunt. Id dolore do proident reprehenderit fugiat officia ullamco veniam est cupidatat amet Lorem excepteur irure. Pariatur dolore irure veniam id qui est excepteur et deserunt exercitation aliqua in labore aliquip.\r\n",
    "LookingFor": "Mollit sunt eu voluptate cupidatat irure in non laboris laboris cupidatat tempor. Aute pariatur ea elit exercitation occaecat. Eiusmod aliquip do in non minim sunt non sit adipisicing. Aute fugiat aliquip exercitation eu laborum nulla Lorem eiusmod cupidatat consectetur id. Eu magna enim enim culpa est ullamco.\r\n",
    "Interests": "Sit ut incididunt nisi aliqua mollit ad sunt qui est cillum amet aute dolore.",
    "City": "Devon",
    "Photos": [
      {
        "url": "https://randomuser.me/api/portraits/women/8.jpg",
        "isProfilePic": true,
        "description": "Excepteur non mollit consequat consectetur."
      }
    ]
  };


  constructor() { }

  ngOnInit() {
  }

}
