import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/service/data/welcome-data.service';
//import {  AppComponent } from '../app.component';/** imporntando una clase */

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
    message='Some welcome Message'
    welcomeMessageFromService:string
    name=''
    //ActivatedRoute
    constructor(private service:WelcomeDataService,
      private router:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.message)
    console.log(this.router.snapshot.params['name']) /** Con esto se cacha la variable del path*/
    this.name=this.router.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('last line of getWelcomeMessage')
    /**
     *  La subscripcion ocurre aquí
     * llama asincronamente al servicio
     *  */
    //console.log("get welcome message");
  }


  getWelcomeMessageWithParameter(){
    
    this.service.executeHellowWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('last line of getWelcomeMessage')
    /**
     *  La subscripcion ocurre aquí
     * llama asincronamente al servicio
     *  */
    //console.log("get welcome message");
  }



  handleSuccessfulResponse(response){
   this.welcomeMessageFromService=response.message;
    console.log(response.message);
  }

  handleErrorResponse(error){
    this.welcomeMessageFromService=error.error.message
  }

}
/*No existen las interfaces en javascript pero typscript si puede haber mas de una clase en un archivo javascript*/
/**Un módulo en javascript representa un archivo que contiene clases definicion de funciones */
/**Se pueden utilizar clases de otro modulo */
/** Definición de clase similar to java 
 * public ------export (to use outside of this module)
 * public clas name ------- contructor(){}
 * void inti()------- init()  : void{}
 * string name ------- name='aby' or massage : string='name' 
 * 
*/