import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; /** hace posible la conexion entre atributos y componentes*/


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
/**Aquí se agregan todos los modulos que se vayan agregando con el comando ng generate component <nombre>*/
/**Cuando se construye una aplicacion angular se crean una serie de modulos */
/**Unos modulos ya existen y solo hay que "importarlos" */
/** Each directive that you create as part of the angular application are always associated with angular Module*/
@NgModule({ /**la anotación indica que se trata de un modulo de angular*/
  declarations: [/**Parte del modulo */
    AppComponent,
    WelcomeComponent,/** esto es un javascript modules */
    LoginComponent, /** esto es un javascript modules */
    ErrorComponent,/** esto es un javascript modules */
    ListTodosComponent, MenuComponent, FooterComponent, LogoutComponent, TodoComponent /** esto es un javascript modules */
  ],
  imports: [ /**los componentes necesitan esto para funcinar */
    BrowserModule,
    AppRoutingModule,
    FormsModule, /***/
    HttpClientModule
  ],
  providers: [
    /**la siguiente linea sirver para interceptar todas las peticiones y hacer la autenticacipon automaticamente */
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent] /** */
})
export class AppModule { } /**Al importar AppModule se puede hacer uso de todos los componentes */
 /**
  * 
  * 
 */