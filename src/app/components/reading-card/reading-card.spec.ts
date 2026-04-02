import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingCard } from './reading-card';

describe('ReadingCard', () => {
  let component: ReadingCard;
  let fixture: ComponentFixture<ReadingCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadingCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ReadingCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
