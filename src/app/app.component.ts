import { Component } from '@angular/core';
/*La siguiente linea corresponde a la declaración de un componente aquí una descripción de sus atributos:
  selector : es el id con el que se identifica fuera.
  templateUrl: la url del código html donde se encuentra el codigo html especificado
  template : código html
  styleUrls : el código css asociado a este pedazo de código
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template : '<h1>{{title}}</h1>',
  styleUrls: ['./app.component.css']
})

/*Corresponde a variables que pueden ser mandadas a llamar directamente al código html */
export class AppComponent {
  title = 'todo';
  message= 'welcome every one';
}
