import { Component, OnInit } from '@angular/core';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/Basic-authentication.service';

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

  //Roouter
  //Angular.giveMeRouter
  //Depencecy Injection
  constructor(private router: Router,
   private hardcodedAuthenticationService: HardcodedAuthenticationService,
   private basicAuthenticationService : BasicAuthenticationService) { }

  
   ngOnInit() {
  }

  handleLogin(){
   // console.log(this.username);
    //console.log(this.password);
   // if(this.username==='in28minutess' && this.password==='dummy'){
   if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){ 
   //Redirect to welcome page
    this.router.navigate(['welcome',this.username])/**Se pasa el parametro */
      this.invalidLogin=false
    }else{
      this.invalidLogin=true
    }
  }

  handleBasicAuthLogin(){
    console.log(this.username);
    console.log(this.password);
    // if(this.username==='in28minutess' && this.password==='dummy'){
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username,this.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome',this.username])
          this.invalidLogin= false
        },
        error =>{
         console.log(error)
          this.invalidLogin= true
        }
      )
}
}

/**EXISTEN 3 TIPOS DE ENLACES CON  LOS ATRIBUTOS
 * 1.- Enlace de propiedad a valor en vista
 * 2.- Eventos
 * 3.- Usando ngModel
*/