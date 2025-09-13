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
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent {
  email = '';
  password = '';
  hidePassword = true;

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    this.authService.signup(this.email, this.password)
      .then(() => this.router.navigate(['/dashboard']))
      .catch(error => alert(error.message));
  }
    goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
