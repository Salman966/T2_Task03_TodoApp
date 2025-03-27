import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <h2>Add Todo</h2>

    <input [formControl]="todo" placeholder="New todo" />
    <button (click)="add()">Add</button>
  `
})
export class AddTodoComponent {
  todo = new FormControl('', Validators.required);

  constructor(private todoService: TodoService, private router: Router) {}

  add() {
    const value = this.todo.value?.trim();

    if (!value) return;

    this.todoService.add(value);
    this.router.navigate(['/']);
  }
}
