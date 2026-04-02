import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan90 } from './plan90';

describe('Plan90', () => {
  let component: Plan90;
  let fixture: ComponentFixture<Plan90>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plan90],
    }).compileComponents();

    fixture = TestBed.createComponent(Plan90);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
