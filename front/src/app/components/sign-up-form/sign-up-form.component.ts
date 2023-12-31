import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ApiService} from 'src/app/services/api.service';
import {FormField} from '../form/form.component';
import { Helper } from 'src/app/helper';


@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss'],
})
export class SignUpFormComponent {
  formFields: FormField[] = [
    {type: 'input', controlName: 'firstName', label: 'שם פרטי', required: true},
    {type: 'input', controlName: 'lastName', label: 'שם משפחה', required: true},
    {type: 'input', controlName: 'cellPhone', label: 'טלפון', required: true, pattern: '[0-9]*'},
    {
      type: 'select', controlName: 'availability', label: 'זמינות', required: true, options: [
        {value: 'full', label: 'מלאה'},
        {value: 'partial', label: 'חלקית'},
      ],
    },
    {
      type: 'select', controlName: 'experience', label: 'שנות ניסיון', required: true, options: [
        {value: '1-2', label: '1-2'},
        {value: '2-4', label: '2-4'},
        {value: '4-6', label: '4-6'},
        {value: '6+', label: '6+'},
      ],
    },
    {type: 'input', controlName: 'linkedin', label: 'פרופיל לינקדאין', required: true, pattern: 'https?://.+'},
    {type: 'textarea', controlName: 'languages', label: 'ידע (שפות, טכנולוגיות וכו\')', required: true, col: 'col-12'},
    {type: 'textarea', controlName: 'moreInfo', label: 'מידע נוסף כללי', col: 'col-12'},
  ];


  constructor(private api: ApiService, private router: Router) {
  }

  submit(form: FormGroup) {
    let temp = form.value as Helper;
    temp.active = false;
    temp.statusChange = new Date().toLocaleString();
    this.api.addHelper(temp);
    this.router.navigateByUrl('success')
  }

}