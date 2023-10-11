import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-suggestions-form',
  templateUrl: './suggestions-form.component.html',
  styleUrls: ['./suggestions-form.component.scss']
})
export class SuggestionsFormComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      cellPhone: ['', [Validators.required, Validators.pattern("[0-9]*")]],
      suggestion: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      // Handle form submission here
      console.log(this.userForm.value);
    }
  }
}
