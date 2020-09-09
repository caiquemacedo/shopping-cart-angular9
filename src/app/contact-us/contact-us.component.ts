import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  checkoutForm

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      email: '',
      last_name: '',
      description: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your message has been submitted', customerData);

    this.checkoutForm.reset();

    window.alert('Hello ' + customerData.name + '!\n\nYour message has been submitted for us.\nSoon we will contact you by your email ' + customerData.email);
  }

}
