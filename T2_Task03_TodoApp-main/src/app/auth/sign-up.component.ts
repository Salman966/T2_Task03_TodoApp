import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  credentials = { email: '', username: '', password: '' };
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.validateForm()) {
      this.authService.register(this.credentials).subscribe({
        next: () => {
          localStorage.setItem('username', this.credentials.username);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          this.errorMessage = 'Registration failed. Please try again.';
          console.error('Registration error:', error);
        }
      });
    }
  }

  validateForm(): boolean {
    if (!this.credentials.email || !this.credentials.username || !this.credentials.password) {
      this.errorMessage = 'All fields are required';
      return false;
    }
    return true;
  }
}