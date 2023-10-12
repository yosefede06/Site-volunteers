import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {FormField} from '../form/form.component';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent {
  formFields: FormField[] = [
    { type: 'input', controlName: 'email', label: ' מייל', required: true },
    { type: 'input', controlName: 'password', label: 'סיסמא', required: true }]
  constructor(private api: AuthService, private router: Router) {}
  login(form: FormGroup) {
    this.api.login(form.get('email')?.value || '', form.get('password')?.value || '')
   this.router.navigateByUrl('admin')
  }
}
