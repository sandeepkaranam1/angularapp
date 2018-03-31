import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];

  constructor() { }

  ngOnInit() {
    this.users=[{
      firstName:'Raghu Babu',
      lastName:'Naidu',
      age:50,
      address:{
        street:'Official Colony Srinagar',
        city:'vizag',
        state:'Andhra'
      }
    },{
      firstName:'Uma',
      lastName:'Karanam',
      age:43,
      address:{
        street:'Official Colony Srinagar',
        city:'vizag',
        state:'Andhra'
      }
    },{
      firstName:'Sandeep',
      lastName:'Naidu',
      age:25,
      address:{
        street:'508 Main St',
        city:'Atlanta',
        state:'Ga'
      }
    }];
    this.addUser({
      firstName:'Binnu ',
      lastName:'Karanam',
      age:10,
      address:{
        street:'Windsor',
        city:'Torronto',
        state:'Canada'
    }
    });
  }

  addUser(user:User)
  {
    this.users.push(user);
  }

}
