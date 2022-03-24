import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Feedback, ContactType } from "../models/feedback";
import {flyInOut, visibility} from "../animations/app.animations";
import {FeedbackService} from "../services/feedback.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    visibility()
  ]
})
export class ContactComponent implements OnInit {

  feedback!: Feedback;
  feedbackForm!: FormGroup;
  errMsg!: string
  contactTypes = ContactType;
  waitingForResponse = false;
  isHidden = false;
  visibility = 'hidden';

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

  constructor(private fb: FormBuilder,
          private feedbackService: FeedbackService,
          // private route: ActivatedRoute
  ) {
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
    this.waitingForResponse = true;
    this.isHidden = true;
    this.feedback = this.feedbackForm.value;
    //  {firstname: "Maris", lastname: "Pulk", telnum: "0000", email: "marispulk@gmail.com", agree: true, …} - this.feedback võrdub see sisu
    console.log(this.feedback);

    this.feedbackService.submitFeedback(this.feedback)
      .subscribe(feedbackResponse => {
        this.waitingForResponse = false;
        this.feedback = feedbackResponse;
        this.visibility = 'shown';
        setTimeout(() => {
          this.visibility = 'hidden';
          this.isHidden = false;
        }, 5000)

      });
    this.feedbackFormDirective.resetForm();
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
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
