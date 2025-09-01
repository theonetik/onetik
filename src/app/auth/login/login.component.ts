import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  email = '';
  password = '';
  hidePassword = true;
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    this.loading = true;
    try {
      await this.authService.login(this.email, this.password);
      await this.redirectBasedOnRole();  // Uses cached role if available
    } catch (error: any) {
      alert(error.message);
    } finally {
      this.loading = false;
    }
  }

  async loginWithGoogle() {
    this.loading = true;
    try {
      await this.authService.googleSignIn(); // role cached automatically
      await this.redirectBasedOnRole();
    } catch (error: any) {
      alert(error.message);
    } finally {
      this.loading = false;
    }
  }

  async redirectBasedOnRole() {
    const role = await this.authService.getCurrentUserRole();
    this.router.navigate([role === 'superuser' ? '/dashboard' : '/dashboard']);
  }

  goToSignup() {
    this.router.navigate(['/auth/signup']);
  }

  goToForgotPassword() {
    this.router.navigate(['/auth/forgot-password']);
  }
}
