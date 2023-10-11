import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface FormField {
  type: string;
  controlName: string;
  label: string;
  required?: boolean;
  color?: string;
  pattern?: string;
  options?: {value: string, label: string}[];
  colspan?: number;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  @Input() formFields: FormField[] = [];
  @Output() submitForm = new EventEmitter<FormGroup>;

  submit() {
    if (this.form.valid) {
      this.submitForm.emit(this.form);
    }
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const formControls = this.formFields.reduce((acc, field) => {
      // @ts-ignore
      acc[field.controlName] = [field.value || '', field.required ? [Validators.required] : []];
      return acc;
    }, {});

    this.form = this.formBuilder.group(formControls);
  }

}