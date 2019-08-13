import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean{
  constructor(public message:string){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
   return this.http.get<HelloWorldBean>('http://localhost:8456/hello-world-bean');
   /**llamada a servicio rest asincronamente
    * Los observables son la mejor forma de implementar la comunicacion asincrona
    * Angular usa los observables como la interfaz de peticones asincronas
    * El THIS dice que voy a llamar  y dice que voy a obtener cuando ocurran un error o exito
    * 
     * La sentencia anterior no dice que el servicio ha sido ejecutado
     * Los observables nos ayudaran a definir lo que quiero llamar, lo que quiero recibir, lo que quiero ejecutar cuando ocurra un error
     *  Pero no se esta ejecutando hasta que se subscriba 
    * 
    */
  }

  executeHellowWorldServiceWithPathVariable(name){
    const basicAuthHeaderString= this.createBasicAuthenticationHttpHeader();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': basicAuthHeaderString
      })
    };
   
    /*const basicAuthHeaderString= this.createBasicAuthenticationHttpHeader();
    const headers= new HttpHeaders(
      {
      Autorization: basicAuthHeaderString,
      Accept:'*'
      })*/
    return this.http.get<HelloWorldBean>(`http://localhost:8456/hello-world-bean/${name}`,httpOptions);
  }
  createBasicAuthenticationHttpHeader(){
    const username='in28minutes'
    const password='dummy'
    const basicAuthHeaderString='Basic '+ btoa(username+':'+password);
    return basicAuthHeaderString;
  }
}
