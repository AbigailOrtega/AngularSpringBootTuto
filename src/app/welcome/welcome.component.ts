import { Component, OnInit } from '@angular/core';
//import {  AppComponent } from '../app.component';/** imporntando una clase */

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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