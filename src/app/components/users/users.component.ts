import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[];
  showExtended=true;
  ie=false;
  loaded:boolean=false;
  enableAdd:boolean=true;

  constructor() { }

  ngOnInit() {

   setTimeout(()=>{
       this.users=[
       {  firstName:'Raghu Babu',
        lastName:'Naidu',
        age:50,
        address:{
          street:'Official Colony Srinagar',
          city:'vizag',
          state:'Andhra'
        },
        image:'http://lorempixel.com/300/300/people/3'
      },{
        firstName:'Uma',
        lastName:'Karanam',
        age:43,
        address:{
          street:'Official Colony Srinagar',
          city:'vizag',
          state:'Andhra'
        },
        image:'http://lorempixel.com/600/600/people/2'
      },{
        firstName:'Sandeep',
        lastName:'Naidu',
        age:25,
        address:{
          street:'508 Main St',
          city:'Atlanta',
          state:'Ga'
        },
        image:'http://lorempixel.com/300/300/people/1'
      }
    ];
      this.loaded=true;
   },2000);
   
    
    // this.addUser({
    //   firstName:'Binnu ',
    //   lastName:'Karanam',
    //   age:10,
    //   address:{
    //     street:'Windsor',
    //     city:'Torronto',
    //     state:'Canada'
    // }
    // });
  }



  // addUser(user:User)
  // {
  //   this.users.push(user);
  // }

}
