import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q22017Component } from './q22017.component';

describe('Q22017Component', () => {
  let component: Q22017Component;
  let fixture: ComponentFixture<Q22017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q22017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q22017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
