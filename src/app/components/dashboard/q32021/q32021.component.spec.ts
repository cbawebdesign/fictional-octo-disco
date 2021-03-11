import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q32021Component } from './q32021.component';

describe('Q32021Component', () => {
  let component: Q32021Component;
  let fixture: ComponentFixture<Q32021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q32021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q32021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
