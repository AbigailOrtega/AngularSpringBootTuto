import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 /* propiedades a los que se pueden hacer refernecia desde los modelos */
  username='in28minutess'
  password= ''
  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.username);
    console.log(this.password);
  }
}
