import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { TodoComponent } from '../../components/todo/todo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TodoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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
