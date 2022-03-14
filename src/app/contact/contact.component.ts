import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Feedback, ContactType } from "../models/feedback";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  feedback!: Feedback;
  feedbackForm!: FormGroup;
  contactTypes = ContactType;
  @ViewChild('fform') feedbackFormDirective: any;

  formErrors = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: ''
  };

  validationMessages = {
    firstname: {
      'required': 'First name is required !!',
      'minlength': 'First name must be at least 2 chars long !!',
      'maxlength': 'First name cannot pass 25 chars !!'
    },
    lastname: {
      'required': 'Last name is required !!',
      'minlength': 'Last name must be at least 2 chars long !!',
      'maxlength': 'Last name cannot pass 25 chars !!'
    },
    telnum: {
      'required': 'Phone is required !!',
      'pattern': 'Phone must contains only numbers !!'
    },
    email: {
      'required': 'Email is required !!',
      'email': 'This is not an email format !!'
    }
  };

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contactType: 'None',
      message: ''
    })
    this.feedbackForm.valueChanges.subscribe( () => {
      this.onValueChanged()
    })
    this.onValueChanged(); // resetFormValisation Message
  }

  onSubmit() {
    this.feedback = this.feedbackForm?.value
    console.log(this.feedback)
    this.feedbackForm?.reset({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contactType: 'None',
      message: ''
    })
    this.feedbackFormDirective.resetForm()
  }

  onValueChanged() {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        // @ts-ignore
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          // @ts-ignore
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              // @ts-ignore
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}
