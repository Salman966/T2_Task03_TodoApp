import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-todo', component: AddTodoComponent },
];
