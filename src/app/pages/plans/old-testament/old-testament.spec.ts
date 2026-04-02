import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldTestament } from './old-testament';

describe('OldTestament', () => {
  let component: OldTestament;
  let fixture: ComponentFixture<OldTestament>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldTestament],
    }).compileComponents();

    fixture = TestBed.createComponent(OldTestament);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
