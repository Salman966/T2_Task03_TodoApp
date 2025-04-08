import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TodoService } from '../../services/todo.service';
import { TodoComponent } from '../../components/todo/todo.component';
import { Todo } from '../../types/todo.type';
import { Subject } from 'rxjs'; 
import { takeUntil } from 'rxjs/operators'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, TodoComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  todos: Todo[] = [];
  username: string = '';
  private destroy$ = new Subject<void>(); 

  constructor(private todoService: TodoService, private router: Router) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.username = user.username || '';

    this.loadTodos();

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$) 
      )
      .subscribe(() => {
        this.loadTodos();
      });
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe((res: { todos: Todo[] }) => {
      const apiTodos = res.todos.filter((t: Todo) => t.todo?.trim() !== '');
      const localTodos = this.todoService.getLocalTodos();
      this.todos = [...localTodos, ...apiTodos];
    });
  }

  handleTodoDeleted(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
  }

  ngOnDestroy(): void {
    console.log('Unsubscribed!');
    this.destroy$.next(); 
    this.destroy$.complete();
  }
}