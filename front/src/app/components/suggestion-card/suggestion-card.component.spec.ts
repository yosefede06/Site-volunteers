import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionCardComponent } from './suggestion-card.component';

describe('SuggestionCardComponent', () => {
  let component: SuggestionCardComponent;
  let fixture: ComponentFixture<SuggestionCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuggestionCardComponent]
    });
    fixture = TestBed.createComponent(SuggestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
