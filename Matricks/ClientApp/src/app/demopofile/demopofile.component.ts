import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopofile',
  templateUrl: './demopofile.component.html',
  styleUrls: ['./demopofile.component.css']
})
export class DemopofileComponent implements OnInit {

  peoplelist = ["Jane", "Bill", "Turbo", "Jilly", "Goku", "Jane", "Bill", "Turbo", "Jilly", "Goku"];
  a: number = 10;

  constructor() {


  }

  ngOnInit() {
  }

}
