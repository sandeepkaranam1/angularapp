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
    email:''
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
        email:'krbnaidu@gmail.com',
        isActive:true,
        registered:new Date('01/02/2018 08:30:00'),
        hide:true
      },{
        firstName:'Uma',
        lastName:'Karanam',
        email:'uma@gmail.com',
        isActive:false,
        registered:new Date('01/12/2017 08:30:00'),
        hide:true
      },{
        firstName:'Sandeep',
        lastName:'Naidu',
        email:'sandeepkaranam@gmail.com',
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
   email:''
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
