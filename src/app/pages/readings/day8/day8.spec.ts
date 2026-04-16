import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day8 } from './day8';

describe('Day8', () => {
  let component: Day8;
  let fixture: ComponentFixture<Day8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day8],
    }).compileComponents();

    fixture = TestBed.createComponent(Day8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
