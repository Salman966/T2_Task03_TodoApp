import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() text = '';
  @Input() completed = false;
  @Output() complete = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();
}
