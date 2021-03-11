import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q32020Component } from './q32020.component';

describe('Q32020Component', () => {
  let component: Q32020Component;
  let fixture: ComponentFixture<Q32020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q32020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q32020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
