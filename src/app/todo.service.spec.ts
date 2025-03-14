import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'https://your-render-api-url.com/todos';  // Replace with your actual Render API URL

  constructor(private http: HttpClient) {}

  // Fetch all to-dos from the Render API
  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Optional: You can add more methods for adding, updating, or deleting to-dos
}
