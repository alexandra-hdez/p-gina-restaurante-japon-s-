import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit{
  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder){ }

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  onSubmit(): void{
    console.log('Form ->', this.contactForm.value);
  }

  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.minLength(4)]],
      email: ['', [Validators.email]],
      affair: ['', [Validators.maxLength(50)]],
      message: ['', [Validators.maxLength(50)]],
    });
  }
}
