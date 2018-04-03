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
     email:'krb@gmail.com'
   }
  }

  

}

