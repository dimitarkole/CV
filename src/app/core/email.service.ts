import { Injectable } from '@angular/core';
import EmailModel from '../shered/models/email';
import { globalConstants } from '../common/global-constants';
import './../../assets/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() { }

  sendMail(email: EmailModel) {
    return Email.send({
      Host: globalConstants.emailConst.host,
      Username: globalConstants.emailConst.username,
      Password: globalConstants.emailConst.password,
      To: email.to,
      From: email.from,
      Subject: email.subject,
      Body: email.body,
    })
  }
}
