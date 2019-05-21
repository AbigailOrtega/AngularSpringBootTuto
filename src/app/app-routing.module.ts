import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

//welcome
const routes: Routes = [ /**Establece los paths y los redireccionamientos */
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent },/** ASÍ SE AGREGAN VARIABLES EN EL PATH*/
  { path: 'todos', component: ListTodosComponent },/** ASÍ SE AGREGAN VARIABLES EN EL PATH*/
  { path: '**', component: ErrorComponent }
  /*{path:,component:}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
