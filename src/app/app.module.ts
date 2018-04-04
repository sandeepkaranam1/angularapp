import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';


import { AppComponent } from './app.component';
import {UserComponent} from './components/user/user.component';
import { TypeComponent } from './components/type/type.component';
import { InterComponent } from './components/inter/inter.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,UserComponent, TypeComponent, InterComponent, UsersComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
