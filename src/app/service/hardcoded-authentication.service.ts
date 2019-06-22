import { Injectable } from '@angular/core';

@Injectable({ /**Esto lo hace un servicio y se puede usar a nivel de root*/
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

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
    isUserLoggedIn() {
     let user= sessionStorage.getItem('authenticaterUser')
     return !(user ===null)
    }
    logout(){
      sessionStorage.removeItem('authenticaterUser');
    }
}
