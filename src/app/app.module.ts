import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; /** hace posible la conexion entre atributos y componentes*/


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
/**Aquí se agregan todos los modulos que se vayan agregando con el comando ng generate component <nombre>*/
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule /***/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
