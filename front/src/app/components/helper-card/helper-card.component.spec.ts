import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperCardComponent } from './helper-card.component';

describe('HelperCardComponent', () => {
  let component: HelperCardComponent;
  let fixture: ComponentFixture<HelperCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelperCardComponent]
    });
    fixture = TestBed.createComponent(HelperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
