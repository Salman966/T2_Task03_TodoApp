import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  todo = new FormControl('', Validators.required);
  showError = false;

  constructor(private todoService: TodoService, private router: Router) {}

  add() {
    const value = this.todo.value?.trim();

    if (!value) {
      this.todo.setErrors({ required: true });
      this.showError = true;
      return;
    }

    this.todoService.addLocalTodo(value);
    this.router.navigate(['/home']);
  }
}
