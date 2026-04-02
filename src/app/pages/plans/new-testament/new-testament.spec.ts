import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestament } from './new-testament';

describe('NewTestament', () => {
  let component: NewTestament;
  let fixture: ComponentFixture<NewTestament>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTestament],
    }).compileComponents();

    fixture = TestBed.createComponent(NewTestament);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
