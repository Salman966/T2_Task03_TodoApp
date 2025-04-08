import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  credentials = { username: '', password: '' };
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.authService.login(this.credentials.username, this.credentials.password)
      .subscribe({
        next: (res) => {
          localStorage.setItem('currentUser', JSON.stringify({
            username: res.username,
            token: res.token
          }));
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.errorMessage = 'Invalid username or password';
          console.error('Login error:', error);
        }
      });
  }
}