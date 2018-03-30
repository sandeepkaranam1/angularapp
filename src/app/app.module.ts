import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {UserComponent} from './components/user/user.component';
import { TypeComponent } from './components/type/type.component';
import { InterComponent } from './components/inter/inter.component';


@NgModule({
  declarations: [
    AppComponent,UserComponent, TypeComponent, InterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
