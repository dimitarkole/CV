import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../core/email.service';
import EmailModel from '../../shered/models/email';
import './../../../assets/smtp.js';
import { globalConstants } from '../../common/global-constants';
import './../../../assets/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  successfullySendMail: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private emailService: EmailService) { }

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
      body: [
        null,
        [
          Validators.required,
        ]
      ],
      to: [
        null,
        [
          Validators.email,
          Validators.required,
        ]
      ],
    });
  }

  OnSubmit() {
    let email: EmailModel = this.contactForm.value;
    email.from = "dim_kolev2002@abv.bg";
    email.body = "You have successfully sent the email to Dimitar Kolev <br>" + "Body: <br>" + email.body;
    this.emailService.sendMail(email);

    email = this.contactForm.value;
    email.body = "Mail from: <br>" + email.from + "<br>Body: <br>" + email.body;
    email.to = "dim_kolev2002@abv.bg";
    this.emailService.sendMail(email).then((message: any) => {
      this.successfullySendMail = message == "OK";
    });
  }

  get name(): AbstractControl | null{
    return this.contactForm?.get('name');
  }

  get subject(): AbstractControl | null {
    return this.contactForm?.get('subject');
  }

  get body(): AbstractControl | null {
    return this.contactForm?.get('body');
  }

  get to(): AbstractControl | null{
    return this.contactForm?.get('to');
  }
}
