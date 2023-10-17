import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Helper, Suggestion } from 'src/app/helper';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {

  helpers$: Observable<Helper[]>;
  suggestions$: Observable<Suggestion[]>;
  AuthState: Subject<boolean> = new Subject<boolean>();
  
  constructor(private api: ApiService, private authService: AuthService) {
    this.helpers$ = api.getHelpers();
    this.suggestions$ = api.getSuggestions();
    this.AuthState = authService.AuthState;
  }

  logout() {
    this.authService.logout();
  }
}
