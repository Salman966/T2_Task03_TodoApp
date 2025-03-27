import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <h1 style="margin-bottom: 16px;">Todo Application</h1>

  <div *ngFor="let todo of todos; let i = index" style="margin-bottom: 8px; display: flex; align-items: center; gap: 8px;">
    <input type="checkbox" [checked]="todo.completed" (change)="complete(i)" />

    <span [style.textDecoration]="todo.completed ? 'line-through' : 'none'">
      {{ todo.text }}
    </span>

    <button (click)="remove(i)" style="border: none; background: transparent; cursor: pointer; padding: 0;">
      <img src="https://www.svgrepo.com/show/490950/delete.svg" width="20" height="20" alt="Delete" />
    </button>
  </div>

  <div style="margin-top: 16px;">
    <a routerLink="/add-todo">
      <button style="padding: 6px 12px;">Add</button>
    </a>
  </div>
`


})
export class HomeComponent {
  todos = this.todoService.getTodos();

  constructor(private todoService: TodoService) {}

  complete(i: number) {
    this.todoService.markAsComplete(i);
  }

  remove(i: number) {
    this.todoService.delete(i);
  }
}