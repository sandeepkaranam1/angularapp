import { Component } from '@angular/core';

@Component({
    selector:'app-user',
   templateUrl:'./user.component.html',
   styleUrls:['./user.component.css'],
   /* styles:[`
   h2{
       color:red
   }`]  */
   // template:'<h2>It\'s Sandeep  Hi</h2>'
})

export class UserComponent{
    //properties
    firstName= 'Sandeep';
    lastName= 'Karanam';
    age=23;
    address={
        street:'508 Main St NE',
        city:'Atlanta',
        state:'GA'
    }

    //Methods
    constructor(){
        console.log('Hello User');
        this.sayHello();
        console.log(this.age);
        this.hasBirthday();
        console.log(this.age);
    }

    sayHello(){
        console.log(`Hello ${this.firstName}`);
    }

    hasBirthday(){
        this.age+=1;
    }

}
