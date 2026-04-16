import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day9 } from './day9';

describe('Day9', () => {
  let component: Day9;
  let fixture: ComponentFixture<Day9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day9],
    }).compileComponents();

    fixture = TestBed.createComponent(Day9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
