import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q12017Component } from './q12017.component';

describe('Q12017Component', () => {
  let component: Q12017Component;
  let fixture: ComponentFixture<Q12017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q12017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q12017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
