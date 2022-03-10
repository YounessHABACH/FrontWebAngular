import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
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

  constructor(private fb: FormBuilder) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      telnum: [0, Validators.required],
      email: ['', Validators.required],
      agree: false,
      contactType: 'None',
      message: ''
    })
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
}
