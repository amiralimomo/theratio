import { Component } from '@angular/core';

import{UserService}from'./app-user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private userService:UserService){}
  title = 'angularproject';
  invite:boolean=false
  invited(e:boolean){
  this.invite=e
  }
  
}
