import { Component, OnInit, ViewChild } from '@angular/core';
import {User} from '../../models/User';
import {DataService} from '../../services/data.service';

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
  @ViewChild('userForm')  form:any;
  data : any;

  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getData().subscribe(data =>{
      console.log(data);
    });

    this.dataService.getUsers().subscribe(users =>{
      this.users=users;
      this.loaded=true;
    })
    
   setTimeout(()=>{
       
      this.loaded=true;
     
   },2000);
   
    
   
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

  onSubmit({value,valid}:{value:User,valid:boolean})
  {
  if(!valid){
    console.log('Form is not Valid');
  }
  else{
    value.isActive=true;
    value.registered= new Date();
    value.hide= true;
    this.dataService.addUser(value);
    this.form.reset();
  }  
  }

}
