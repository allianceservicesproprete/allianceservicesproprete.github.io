import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  quoteForm: FormGroup;
  successMessage = '';

  constructor(
    private formService: FormService,
    private fb: FormBuilder) {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      phone: [''],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.quoteForm.valid) {
      this.formService.sendFormData(this.quoteForm.value).subscribe((response: any) => {
        this.successMessage = 'Votre message a bien été envoyé.';
        this.quoteForm.reset();
      }, error => {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
      });
    } else {
        this.successMessage = '';
        this.quoteForm.markAllAsTouched();
    } 
  }

  get f() {
    return this.quoteForm.controls;
  }
}
