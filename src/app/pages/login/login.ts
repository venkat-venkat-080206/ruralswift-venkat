import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {

  email        = '';
  password     = '';
  rememberMe   = false;
  showPassword = false;
  isLoading    = false;
  errorMessage = '';

  constructor(private router: Router, private api: ApiService) {
    // If already logged in, redirect to dashboard
    if (this.api.getToken()) {
      this.router.navigate(['/dashboard']);
    }
  }

  login() {
    this.errorMessage = '';

    if (!this.email.trim()) {
      this.errorMessage = 'Please enter your email address.';
      return;
    }
    if (!this.password) {
      this.errorMessage = 'Please enter your password.';
      return;
    }

    this.isLoading = true;

    // Safety: stop spinner after 10s if no response
    const timeout = setTimeout(() => {
      if (this.isLoading) {
        this.isLoading    = false;
        this.errorMessage = 'Server is not responding. Please make sure the backend is running.';
      }
    }, 10000);

    this.api.login(this.email.trim(), this.password).subscribe({
      next: (res) => {
        clearTimeout(timeout);
        this.api.saveSession(res.token, res.user);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        clearTimeout(timeout);
        this.isLoading    = false;
        this.errorMessage = err.error?.message || 'Login failed. Please check your credentials.';
      }
    });
  }

}