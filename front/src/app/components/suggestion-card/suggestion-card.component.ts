import {Component, Input} from '@angular/core';
import {Helper, Suggestion} from '../../helper';

@Component({
  selector: 'app-suggestion-card',
  templateUrl: './suggestion-card.component.html',
  styleUrls: ['./suggestion-card.component.scss']
})
export class SuggestionCardComponent {
  @Input() suggestion: Suggestion = new Suggestion();
}
