import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './auth/sign-in.component';
import { SignUpComponent } from './auth/sign-up.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component'; 

export const routes: Routes = [
  { path: '', component: SignInComponent, title: 'Sign In' },
  { path: 'sign-up', component: SignUpComponent, title: 'Sign Up' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'add-todo', component: AddTodoComponent, title: 'Add Todo' },
  { path: '**', redirectTo: '' }
];
