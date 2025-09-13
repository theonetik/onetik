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
  selector: 'app-forget-password',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.sass']
})
export class ForgetPasswordComponent {
  email: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  sendReset() {
    if (!this.email) {
      alert('Please enter an email address');
      return;
    }
    this.authService.forgotPassword(this.email)
      .then(() => {
        alert('Password reset link sent to your email.');
        this.email = '';
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
