import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1 } from './day1';

describe('Day1', () => {
  let component: Day1;
  let fixture: ComponentFixture<Day1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day1],
    }).compileComponents();

    fixture = TestBed.createComponent(Day1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
