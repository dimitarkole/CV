import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
        ]
      ],
      subject: [
        null,
        [
          Validators.required,
        ]
      ],
      message: [
        null,
        [
          Validators.required,
        ]
      ],
      email: [
        null,
        [
          Validators.email,
          Validators.required,
        ]
      ],
    });
  }

  OnSubmit() {
    alert("Do not work");
  }

  get name(): AbstractControl | null{
    return this.contactForm?.get('name');
  }

  get subject(): AbstractControl | null {
    return this.contactForm?.get('subject');
  }

  get message(): AbstractControl | null {
    return this.contactForm?.get('message');
  }

  get email(): AbstractControl | null{
    return this.contactForm?.get('email');
  }
}
