import { Injectable } from '@angular/core';

@Injectable({ /**Esto lo hace un servicio y se puede usar a nivel de root*/
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username,password){
    if(username==='in28minutess' && password==='dummy'){
        return true;
    }else{
      return false;
    }
  }
}
