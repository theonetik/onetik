import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,MatCard,MatDivider],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {

 contactForm!: FormGroup;
  submitted = false;
  successMessage = '';

  constructor(private fb: FormBuilder,private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() { return this.contactForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) return;

    this.contactService.addMessage(this.contactForm.value)
      .then(() => {
        this.successMessage = 'Thank you! Your message has been sent successfully.';
        this.contactForm.reset();
        this.submitted = false;
      })
      .catch(err => {
        console.error('Error saving message:', err);
        this.successMessage = 'Oops! Something went wrong. Please try again later.';
      });
  }
}
