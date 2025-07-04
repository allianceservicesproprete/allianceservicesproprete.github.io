import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';

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
  
  constructor(
    private formService: FormService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  
  
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.formService.sendFormData(this.contactForm.value).subscribe((response: any) => {
        this.successMessage = 'Votre message a bien été envoyé.';
        this.contactForm.reset();
      }, error => {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
      });
    } else {
      this.successMessage = '';
      this.contactForm.markAllAsTouched();
    }
  }
  
  get f() {
    return this.contactForm.controls;
  }
}
