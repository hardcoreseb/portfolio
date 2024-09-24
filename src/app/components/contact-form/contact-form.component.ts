import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, FormControl, Validators } from '@angular/forms';
import { JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, NgIf],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  form: FormGroup = this.fb.group({
    to_name: 'Sebastian',
    from_name: ['', Validators.required],
    from_email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  }
);

  constructor(private fb: FormBuilder) {}

  public async send(){
    if (this.form.valid) {

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
    else {
      // Check which field has errors
    //   Object.keys(this.form.controls).forEach(field => {
    //   const control = this.form.get(field);
    //   if (control?.errors) {
    //     console.log(`${field} has errors: `, control.errors);
    //   }
    // });
      
      alert('Please fill in all required fields correctly.')

      this.form.markAllAsTouched();
    }
  }

  // Method to check if a form field has an error
  public hasError(field: string, error: string): boolean | null {
    const control = this.form.get(field);
    return control && control.hasError(error) && control.touched;
  }

}

