import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user : User = { 
    firstName:'',
    lastName:'',
    age:null,
    address:{
      street:'',
      city:'',
      state:''
    }
  }
  users:User[];
  showExtended=true;
  ie=false;
  loaded:boolean=false;
  enableAdd:boolean=true;
  showUsersForm:boolean=true;
  currentStyles:{};

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
        
        isActive:true,
        registered:new Date('01/02/2018 08:30:00'),
        hide:true
      },{
        firstName:'Uma',
        lastName:'Karanam',
        age:43,
        address:{
          street:'Official Colony Srinagar',
          city:'vizag',
          state:'Andhra'
        },
        
        isActive:false,
        registered:new Date('01/12/2017 08:30:00'),
        hide:true
      },{
        firstName:'Sandeep',
        lastName:'Naidu',
        age:25,
        address:{
          street:'508 Main St',
          city:'Atlanta',
          state:'Ga'
        },
        
        isActive:true,
        registered:new Date('01/05/2017 08:30:00'),
        hide:true
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


  fireEvent(e){
    console.log(e.type);
    console.log(e.target.value);
    
  }


  addUser()
  {
    this.user.isActive=true;
    this.user.registered=new Date();
    this.users.unshift(this.user);

    this.user={
      firstName:'',
    lastName:'',
    age:null,
    address:{
      street:'',
      city:'',
      state:''
    }
    }
  }

  toggleHide(user:User)
  {
    user.hide=!user.hide;
  }

  onSubmit(e)
  {
    console.log(123);
    e.preventDefault();
  }

}
