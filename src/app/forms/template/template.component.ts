import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  @ViewChild('f') Viewform: NgForm;
  defaultOption = 'Q1';
  answer: string;
  genders = ['male', 'female'];
  submitted = false;
  userData = {
    userName: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };
  constructor() {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(' form is valid !');
    }
    this.submitted = true;
    // u can chose to use either form or this.ViewForm :
    this.userData.userName = form.value.userData.userName;
    this.userData.email = this.Viewform.value.userData.email;
    this.userData.question = form.value.question;
    this.userData.answer = form.value.answer;
    this.userData.gender = this.Viewform.value.gender;
    // form.reset();
    // this.ViewForm.reset();
  }
}
