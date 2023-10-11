import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../services/api.service';
import {FormField} from '../form/form.component';

@Component({
  selector: 'app-suggestions-form',
  templateUrl: './suggestions-form.component.html',
  styleUrls: ['./suggestions-form.component.scss']
})
export class SuggestionsFormComponent {
  formFields: FormField[] = [
    { type: 'input', controlName: 'firstName', label: 'שם פרטי', required: true },
    { type: 'input', controlName: 'lastName', label: 'שם משפחה', required: true },
    { type: 'input', controlName: 'cellPhone', label: 'טלפון', required: true, pattern: "[0-9]*" },
    { type: 'input', controlName: 'suggestion', label: 'תיאור הרעיון' , required: true},
  ];


  constructor(private api: ApiService) {
  }

  submit(form: FormGroup) {
    this.api.addForHelp(form.value);
  }
}
