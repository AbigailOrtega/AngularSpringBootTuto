import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
export const TOKEN ='token';
export const AUTHENTICATED_USER='authenticaterUser';

@Injectable({ /**Esto lo hace un servicio y se puede usar a nivel de root*/
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }

  authenticate(username,password){
    console.log('before' + this.isUserLoggedIn());
    
    if(username==='in28minutess' && password==='dummy'){
        sessionStorage.setItem(AUTHENTICATED_USER,username); /*Asi se guardan datos en session */
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
          sessionStorage.setItem(AUTHENTICATED_USER,username); /*Asi se guardan datos en session */
          sessionStorage.setItem(TOKEN,basicAuthHeaderString);
          return data;
        }
      )
    );
  }
    getAuthenticatedUser(){
      return sessionStorage.getItem(AUTHENTICATED_USER);
    }
    getAuthenticatedToken(){
      if(this.getAuthenticatedUser())
        return sessionStorage.getItem(TOKEN);
    }
    
    isUserLoggedIn() {
     let user= sessionStorage.getItem(AUTHENTICATED_USER)
     return !(user ===null)
    }
    logout(){
      sessionStorage.removeItem(AUTHENTICATED_USER);
      sessionStorage.removeItem(TOKEN);
    }
}
export class AuthenticationBean{
  constructor(public message:string ){

  }
}
