import { CommonModule } from '@angular/common';  // Import CommonModule
import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true, // Make sure this is set to true for standalone components
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: any[] = []; // Array to store the todos

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos(); // Call method to fetch todos when component is initialized
  }
  getTodos(): void {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data.filter(todo => !todo.is_completed); // Only show non-completed todos
    });
  }
  // Add new todo
  addTodo(taskInput: HTMLInputElement): void {
    if (!taskInput.value.trim()) return; // Prevent adding empty tasks

    const newTodo = { task: taskInput.value };
    this.todoService.addTodo(newTodo).subscribe(() => {
      this.getTodos(); // Refresh the todos list after adding
      taskInput.value = ''; // Clear the input field
    });
  }


  // Update Todo
  editTodo(todo: any): void {
    const updatedTask = prompt("Edit task:", todo.task);
    if (updatedTask !== null && updatedTask.trim() !== "") {
      const updatedTodo = { task: updatedTask, completed: todo.is_completed };
      this.todoService.updateTodo(todo.id, updatedTodo).subscribe(() => {
        this.getTodos(); // Refresh list after editing
      });
    }
  }

  // Delete a todo by ID
  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.getTodos(); // Refresh the todos list after deleting
    });
  }
}
