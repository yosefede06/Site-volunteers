import { Component, Input } from '@angular/core';
import { Suggestion } from '../../helper';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-suggestion-card',
  templateUrl: './suggestion-card.component.html',
  styleUrls: ['./suggestion-card.component.scss']
})
export class SuggestionCardComponent {
  @Input() suggestion: Suggestion = new Suggestion();

  constructor(private api: ApiService) { }

  changeForHelpStatus() {
    this.suggestion.statusChange = new Date().toLocaleString();
    this.api.changeForHelpStatus(this.suggestion);
  }

  deleteForHelp() {
    if (confirm("האם ברצונך לבצע מחיקה?")) {
      this.api.deleteForHelp(this.suggestion);
    }
  }
}
