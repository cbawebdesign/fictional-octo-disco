import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q12019Component } from './q12019.component';

describe('Q12019Component', () => {
  let component: Q12019Component;
  let fixture: ComponentFixture<Q12019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q12019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q12019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
