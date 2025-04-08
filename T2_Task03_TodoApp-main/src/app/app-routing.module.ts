import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { SignInComponent } from './auth/sign-in.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-todo', component: AddTodoComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}