import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent {  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cellPhone: ['', [Validators.required, Validators.pattern("[0-9]*")]],
      availability: ['', Validators.required],
      experience: ['', Validators.required],
      languages: ['', Validators.required],
      linkedin: ['', [Validators.required, Validators.pattern(/^(https:\/\/www\.linkedin\.com\/)/)]],
      moreInfo: ''
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Handle form submission here
      console.log(this.userForm.value);
    }
  }

}