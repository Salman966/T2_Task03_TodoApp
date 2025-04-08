import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Todo {
  id: number;
  todo: string;       
  completed: boolean;
  userId: number;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
  private apiUrl = 'https://dummyjson.com/todos';
  private localKey = 'myLocalTodos';

  constructor(private http: HttpClient) {}

  getTodos(limit: number = 5): Observable<{ todos: Todo[] }> {
    return this.http.get<{ todos: Todo[] }>(`${this.apiUrl}?limit=${limit}`);
  }

  getLocalTodos(): Todo[] {
    const data = localStorage.getItem(this.localKey);
    return data ? JSON.parse(data) : [];
  }

  addLocalTodo(text: string): void {
    const todos = this.getLocalTodos();
    todos.push({
      id: Date.now(),
      todo: text,
      completed: false,
      userId: 0,
    });
    localStorage.setItem(this.localKey, JSON.stringify(todos));
  }

  toggleLocalComplete(id: number): void {
    const todos = this.getLocalTodos().map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    localStorage.setItem(this.localKey, JSON.stringify(todos));
  }

  deleteLocalTodo(id: number): void {
    const todos = this.getLocalTodos().filter(todo => todo.id !== id);
    localStorage.setItem(this.localKey, JSON.stringify(todos));
  }
}