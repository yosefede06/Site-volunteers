import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent {
  constructor(private translocoService: TranslocoService) { }
  public languagesList:
    Array<Record<'imgUrl' | 'code' | 'name' | 'shorthand', string>> = [
      {
        imgUrl: '/assets/images/English.png',
        code: 'en',
        name: 'English',
        shorthand: 'ENG',
      },
      {
        imgUrl: '/assets/images/Hebrew.png',
        code: 'he',
        name: 'עברית',
        shorthand: 'HEB',
      },
    ];
  public changeLanguage(languageCode: string): void {
    this.translocoService.setActiveLang(languageCode);
    languageCode === 'he'
      ? (document.body.style.direction = 'rtl')
      : (document.body.style.direction = 'ltr');
  }
}