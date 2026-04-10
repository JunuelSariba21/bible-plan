import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1Component } from './day1';

describe('Day1', () => {
  let component: Day1Component;
  let fixture: ComponentFixture<Day1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Day1Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
