import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q12020Component } from './q12020.component';

describe('Q12020Component', () => {
  let component: Q12020Component;
  let fixture: ComponentFixture<Q12020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q12020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q12020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
