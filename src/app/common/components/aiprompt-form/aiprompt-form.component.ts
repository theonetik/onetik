import { Component, Inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AIPrompt } from '../../interface/aiprompt';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-aiprompt-form',
  standalone: true,
  imports: [ ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule],
  templateUrl: './aiprompt-form.component.html',
  styleUrl: './aiprompt-form.component.sass'
})
export class AIPromptFormComponent {
form = this.fb.group({
title: ['', Validators.required],
description: ['', Validators.required],
});


constructor(
private fb: FormBuilder,
private dialogRef: MatDialogRef<AIPromptFormComponent>,
@Inject(MAT_DIALOG_DATA) public data: AIPrompt | null
) {
if (data) this.form.patchValue(data);
}


save() {
if (this.form.valid) this.dialogRef.close(this.form.value);
}
}
