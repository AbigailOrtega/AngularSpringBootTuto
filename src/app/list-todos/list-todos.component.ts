import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router} from '@angular/router';
export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  
  todos: Todo[]
  message: string
  /*=[
    new Todo(1,'Learn to Dance', false, new Date()),
    new Todo(2,'Become an Expert at Angular', false, new Date()),
    new Todo(3,'Visit India', false, new Date())
  /*
    
    { id:1, description:'Learn to Dance'},
    { id:2, description:'Become an Expert at Angular'},
    { id:3, description:'Visit India'}*/
  /*]*/

  /*todo ={
    id :1,
    description :'Learn to Dance'
  }
 */
//CREANDO UN SOLO ELEMENTO TODO
  constructor(
    private todoService:TodoDataService,
    private router:Router

  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos(){
    this.todoService.retriveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todos=response;
      }
    )
  }
  deleteTodo(id){
    console.log(`delete todo ${id}`);
    this.todoService.deleteTodo('in28minutes',id).subscribe(
      response =>{
        console.log(response);
        this.message=`Delete of todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }
  updateTodo(id){
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id])
  }
}
