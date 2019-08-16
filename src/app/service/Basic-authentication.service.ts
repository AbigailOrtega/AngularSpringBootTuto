import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({ /**Esto lo hace un servicio y se puede usar a nivel de root*/
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username,password){
    console.log('before' + this.isUserLoggedIn());
    
    if(username==='in28minutess' && password==='dummy'){
        sessionStorage.setItem('authenticaterUser',username); /*Asi se guardan datos en session */
        console.log('after' + this.isUserLoggedIn());
      return true;
    }else{
      return false;
    }
  }
/** El metodo anterior (authenticate) era la forma en como se hacìa el logeo antes cuando no habìa spring security ya no se usa pero lo dejo como 
 * recuerdo de como se realizaba
 */
  executeBasicAuthenticationService(username,password){
   
    console.log("username: " + username)
    console.log("password: " + password)
    const basicAuthHeaderString='Basic '+ btoa(username+':'+password);
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': basicAuthHeaderString
      })
    }
   
    /*const basicAuthHeaderString= this.createBasicAuthenticationHttpHeader();
    const headers= new HttpHeaders(
      {
      Autorization: basicAuthHeaderString,
      Accept:'*'
      })*/
    return this.http.get<AuthenticationBean>(`http://localhost:8456/basicauth`,httpOptions).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticaterUser',username); /*Asi se guardan datos en session */
          sessionStorage.setItem('token',basicAuthHeaderString);
          return data;
        }
      )
    );
  }
    getAuthenticatedUser(){
      return sessionStorage.getItem('authenticaterUser');
    }
    getAuthenticatedToken(){
      if(this.getAuthenticatedUser())
        return sessionStorage.getItem('token');
    }
    
    isUserLoggedIn() {
     let user= sessionStorage.getItem('authenticaterUser')
     return !(user ===null)
    }
    logout(){
      sessionStorage.removeItem('authenticaterUser');
      sessionStorage.removeItem('token');
    }
}
export class AuthenticationBean{
  constructor(public message:string ){

  }
}
