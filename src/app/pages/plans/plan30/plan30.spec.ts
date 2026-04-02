import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan30Component } from './plan30';

describe('Plan30', () => {
  let component: Plan30Component;
  let fixture: ComponentFixture<Plan30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plan30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Plan30Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
