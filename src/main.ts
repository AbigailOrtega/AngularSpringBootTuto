import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



  /**Existen dos elementos que juegan un papel muy importante 
   * 
   * root Module
   * root component
   * 
   * TODO INICIA CUANDO SE CARGA EL MAIN Y ESTE CARGA EL APPMODULE (app.module.ts)
   * cuando se carga el AppModule se carga el html (index.html) 
   * y el elemento <app-root></app-root> "redirecciona" a app.component.html
   *  y el elemento <root-outlet></root-outlet> permite el redireccionamiento con los paths
   * 
   * 
  */