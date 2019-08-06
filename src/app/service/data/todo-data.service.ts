import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retriveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8456/users/${username}/todos`);
    
   }

   deleteTodo(username,id){
     return this.http.delete(`http://localhost:8456/users/${username}/todos/${id}`);

   }

   retrieveTodo(username,id){
    return this.http.get<Todo>(`http://localhost:8456/users/${username}/todo/${id}`);

  }
   
  updateTodo(username,id,todo){
    return this.http.put(`http://localhost:8456/users/${username}/todos/${id}`,todo);

  }

  createTodo(username,todo){
    return this.http.post(`http://localhost:8456/users/${username}/todos`,todo);

  }
}
