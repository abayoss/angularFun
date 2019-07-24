import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbidenUserNames = ['oussama', 'hanah'];
  userData = {
    username: '',
    email: '',
    gender: '',
    hobbies: [],
  };
  submitted = false;
  constructor() {}

  ngOnInit() {
    this.generateReactiveForm();
    // listen to form updates:
    this.signupForm.statusChanges.subscribe(val => console.log(val));
    this.signupForm.valueChanges.subscribe(val => console.log(val));
    // update the hole form:
    this.signupForm.setValue({
      userData: {
        username: 'oussama',
        email: 'email@email'
      },
      gender: 'male',
      hobbies: []
    });
    // update just a part of the form:
    this.signupForm.patchValue({
      userData: {
        username: 'new Name'
      }
    });
  }
  generateReactiveForm() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.checkForbidenNames.bind(this)
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.checkForbidenEmail.bind(this)
        )
      }),
      gender: new FormControl(null, Validators.required),
      hobbies: new FormArray([])
    });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.signupForm);
    this.userData.username = this.signupForm.value.userData.username;
    this.userData.email = this.signupForm.value.userData.email;
    this.userData.gender = this.signupForm.value.gender;
    this.userData.hobbies = this.signupForm.value.hobbies;
    if (confirm('want to reset the form?')) {
      this.signupForm.reset({
        gender: 'male'
      });
    }
  }
  onAddHobby() {
    const hobbyControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(hobbyControl);
  }
  checkForbidenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbidenUserNames.indexOf(control.value) !== -1) {
      return { forbiden: true };
    }
    return null;
  }
  checkForbidenEmail(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          res({ forbidenEmail: true });
        } else {
          res(null);
        }
      }, 1500);
    });
    return promise;
  }
}
