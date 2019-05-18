import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 /* propiedades a los que se pueden hacer refernecia desde los modelos */
  username='in28minutess'
  password= ''
  errorMessage='Invalid Crdentials'
  invalidLogin=false
  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
   // console.log(this.username);
    //console.log(this.password);
    if(this.username==='in28minutess' && this.password==='dummy'){
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }
}

/**EXISTEN 3 TIPOS DE ENLACES CON  LOS ATRIBUTOS
 * 1.- Enlace de propiedad a valor en vista
 * 2.- Eventos
 * 3.- Usando ngModel
*/