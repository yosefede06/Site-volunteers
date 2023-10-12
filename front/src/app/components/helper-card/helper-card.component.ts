import { Component, Input } from '@angular/core';
import { Helper } from '../../helper';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-helper-card',
  templateUrl: './helper-card.component.html',
  styleUrls: ['./helper-card.component.scss']
})
export class HelperCardComponent {
  @Input() helper: Helper = new Helper();

  constructor(private api: ApiService) { }

  changeHelperStatus() {
    this.helper.statusChange = new Date().toLocaleString();
    this.api.changeHelperStatus(this.helper);
  }

  deleteHelper() {
    if (confirm("האם ברצונך לבצע מחיקה?")) {
      this.api.deleteHelper(this.helper);
    }
  }

}
