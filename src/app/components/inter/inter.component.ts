import { Component, OnInit } from '@angular/core';

import {User} from '../../models/User';
@Component({
  selector: 'app-inter',
  templateUrl: './inter.component.html',
  styleUrls: ['./inter.component.css']
})
export class InterComponent  {

  user:User;
  
  constructor() { 
   this.user={
     firstName:'Raghu Babu',
     lastName:'Naidu',
     age:50,
     address:{
       street:'Official Colony Srinagar',
       city:'vizag',
       state:'Andhra'
     }
   }
  }

  

}

