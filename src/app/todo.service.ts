import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // Update the API URL to match the correct backend URL
  private apiUrl = 'https://todoapi-843y.onrender.com/todos'; // Your Render URL

  constructor(private http: HttpClient) {}

  // Fetch all todos from the backend
  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl); // GET /todos
  }

  // Add a new todo via POST
  addTodo(newTodo: { task: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/addtodo`, newTodo); // POST /todos/addtodo
  }

  // Update an existing todo
  updateTodo(id: string, updatedTodo: { task: string; completed: boolean }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, updatedTodo);
  }

  // Delete a todo by ID
  deleteTodo(id: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/delete/${id}`, {}); // DELETE /todos/delete/:id
  }
}
