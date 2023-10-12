import {Component, Input} from '@angular/core';
import {Helper} from '../../helper';

@Component({
  selector: 'app-helper-card',
  templateUrl: './helper-card.component.html',
  styleUrls: ['./helper-card.component.scss']
})
export class HelperCardComponent {
  @Input() helper: Helper = new Helper();
}
