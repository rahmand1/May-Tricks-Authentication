import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-demopofile',
  templateUrl: './demopofile.component.html',
  styleUrls: ['./demopofile.component.css']
})
export class DemopofileComponent implements OnInit {

  peoplelist: any; //["Jane", "Bill", "Turbo", "Jilly", "Goku", "Jane", "Bill", "Turbo", "Jilly", "Goku"];
  a: number = 10;

  constructor(private _data: DataService) {


  }

  ngOnInit() {

    this._data.localChange.subscribe(res => this.peoplelist = res);
    this._data.updateMyData(this.peoplelist);
    //this.peoplelist = _data.localChange;


  }



  public CalculateAge(birthdate : Date ): string {

    //var today: Date = new Date();
    //var timeDiff: number = Math.abs(today.getFullYear - birthdate.getFullYear);
      //Used Math.floor instead of Math.ceil
      //so 26 years and 140 days would be considered as 26, not 27.
    //var offset: number = (Math.floor((timeDiff / (1000 * 3600 * 24)) / 365));
    
    
    //return timeDiff.toString();
    return '20';
    }




}
