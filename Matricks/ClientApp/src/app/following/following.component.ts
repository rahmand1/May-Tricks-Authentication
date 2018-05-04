import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FollowingData } from '../models/FollowingData';


@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  peoplelist: any;

  following: FollowingData[];//   = new FollowingData[];

  constructor(private _data: DataService) { }

  addFollowing(following : string) {

    var a: FollowingData;
    a.userName = following;
    this.following.push(a);


  }

  ngOnInit() {

    this._data.localChange.subscribe(res => this.peoplelist = res);
    this._data.updateMyData(this.peoplelist);
    //this.peoplelist = _data.localChange;

    for (let a of this.peoplelist)
      {
      this.following.push(a);


       }



  }

}
