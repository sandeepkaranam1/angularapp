import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent  {

  firstName: string;
  lastName: string;
  age: number;
  address;
  mixedarray:any;
  myTuple:[string,number,boolean];
  unusable:void;
  u:undefined;
  n:null;

  numberarray: number[];
  constructor() {
    this.firstName='Sandeep';
    this.lastName='Karanam';
    this.age=25;
    this.address={
      street:'508 Main St NE',
        city:'Atlanta',
        state:'GA'
    }
    this.numberarray=[1,2,3,4];
    this.mixedarray=[1,2,"Sandeep","go",true];
    this.myTuple=['sandeep',23,true];
    this.unusable=undefined;
    this.u=undefined;
    this.n=null;
   }

 

  

}
