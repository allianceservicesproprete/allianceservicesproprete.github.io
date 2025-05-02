import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  
  
  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulaire soumis :', this.contactForm.value);
      this.successMessage = 'Votre message a bien été envoyé.';
      this.errorMessage = '';
      this.contactForm.reset();
    } else {
      this.successMessage = '';
      this.contactForm.markAllAsTouched();
    }
  }
  
  get f() {
    return this.contactForm.controls;
  }
}
