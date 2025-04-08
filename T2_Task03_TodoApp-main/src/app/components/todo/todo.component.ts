import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../types/todo.type';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Output() todoDeleted = new EventEmitter<number>();

  constructor(private todoService: TodoService) {}

  toggleComplete(): void {
    if (this.todo.userId === 0) {
      this.todoService.toggleLocalComplete(this.todo.id);
    }
    this.todo.completed = !this.todo.completed;
  }

  deleteTodo(): void {
    if (this.todo.userId === 0) {
      this.todoService.deleteLocalTodo(this.todo.id);
    }
    this.todoDeleted.emit(this.todo.id);
  }
}