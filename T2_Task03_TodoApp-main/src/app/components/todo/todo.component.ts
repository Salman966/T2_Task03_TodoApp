import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../types/todo.type'; 

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo!: Todo;    
  @Output() completed = new EventEmitter<Todo>(); 
  @Output() deleted = new EventEmitter<Todo>();    

  toggleComplete(): void {
    this.completed.emit(this.todo);
  }

  deleteTodo(): void {
    this.deleted.emit(this.todo);
  }
}