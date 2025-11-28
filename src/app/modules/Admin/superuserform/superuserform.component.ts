import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { SuperuserService } from '../superuser.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/common/interface/user';

@Component({
  selector: 'app-superuserform',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  templateUrl: './superuserform.component.html',
  styleUrl: './superuserform.component.sass'
})
export class SuperuserformComponent implements OnInit {
  form!: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private superuserService: SuperuserService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<SuperuserformComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.data?.name || '', Validators.required],
      email: [this.data?.email || '', [Validators.required, Validators.email]],
      password: [this.data?.password || '', this.data?.id ? [] : Validators.required],
      role: [this.data?.role || 'superuser', Validators.required]  // Default to superuser
    });
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.isSubmitting = true;

    const formValue: User = {
      id: this.data?.id,
      ...this.form.value
    };

    try {
      if (formValue.id) {
        // Update existing user (no password update)
        await this.superuserService.updateSuperUser(formValue);
        this.snackBar.open('Super User updated successfully', 'Close', { duration: 3000 });
      } else {
        // 1) Create user in Firebase Authentication
        const cred = await this.authService.signup(formValue.email, formValue.password!);

        // 2) Save user record in Firestore (without password) & enforce role=superuser
        const { password, ...userData } = formValue;
        await this.superuserService.addSuperUser({
          id: cred.user.uid,
          name: formValue.name,
          email: formValue.email,
          role: 'superuser' // enforce role
        });;

        this.snackBar.open('Super User added successfully', 'Close', { duration: 3000 });
      }

      this.dialogRef.close(true);
    } catch (error) {
      this.snackBar.open('Error saving user: ' + (error as any)?.message, 'Close', { duration: 5000 });
    } finally {
      this.isSubmitting = false;
    }
  }
}
