import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewievCardsComponent } from './rewiev-cards.component';

describe('RewievCardsComponent', () => {
  let component: RewievCardsComponent;
  let fixture: ComponentFixture<RewievCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RewievCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RewievCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
