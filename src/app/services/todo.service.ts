import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TodoService {
  todos = [
    { text: 'Task01', completed: false },
    { text: 'Task02', completed: false }
  ];

  getTodos() {
    return this.todos;
  }

  add(text: string) {
    this.todos.push({ text, completed: false });
  }

  delete(i: number) {
    this.todos.splice(i, 1);
  }

  markAsComplete(i: number) {
    this.todos[i].completed = !this.todos[i].completed;
  }
}
