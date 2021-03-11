import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q32017Component } from './q32017.component';

describe('Q32017Component', () => {
  let component: Q32017Component;
  let fixture: ComponentFixture<Q32017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q32017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q32017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
