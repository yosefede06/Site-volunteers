import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  private helpers: User[] = [];
  constructor(private api: ApiService) {
    api.getHelpers().subscribe((res: any) => {
      this.helpers = res;
      console.log(res);
    })

  }

}
