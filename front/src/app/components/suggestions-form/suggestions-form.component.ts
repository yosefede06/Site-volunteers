import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {FormField} from '../form/form.component';
import { Suggestion } from 'src/app/helper';

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
    { type: 'textarea', controlName: 'suggestion', label: 'תיאור הרעיון' , required: true, colspan: 3},
  ];


  constructor(private api: ApiService, private router: Router) {
  }

  submit(form: FormGroup) {
    let temp = form.value as Suggestion;
    temp.active = false;
    temp.statusChange = new Date().toLocaleString();
    this.api.addForHelp(temp);
    this.router.navigateByUrl('success')
  }
}
