import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Helper } from 'src/app/helper';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

   helpers$: Observable<Helper[]>;
  constructor(private api: ApiService) {
    this.helpers$ = api.getHelpers()

  }

}
