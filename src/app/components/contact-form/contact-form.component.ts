import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  form: FormGroup = this.fb.group({
    to_name: 'Sebastian',
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });

  constructor(private fb: FormBuilder) {}

  public async send(){
    emailjs.init('D_SvhZB3N9x9YkzeK')
    let response = await emailjs.send("service_qa2m5e7","template_a1sy9dz",{
      to_name: this.form.value.to_name,
      from_name: this.form.value.from_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    });

    alert('Message sent successfully!')

    this.form.reset();
  }

}

