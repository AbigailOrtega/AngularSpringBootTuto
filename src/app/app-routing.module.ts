import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { TodoComponent } from './todo/todo.component';

//welcome
const routes: Routes = [ /**Establece los paths y los redireccionamientos */
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService] },/** ASÍ SE AGREGAN VARIABLES EN EL PATH*/
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService]  },/** ASÍ SE AGREGAN VARIABLES EN EL PATH*/
  { path: 'logout', component: LogoutComponent , canActivate:[RouteGuardService] }, /** verificar que si esta logeado */
  { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService]},
  { path: '**', component: ErrorComponent ,canActivate:[RouteGuardService]  }
  /*{path:,component:}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
