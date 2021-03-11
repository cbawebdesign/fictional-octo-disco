import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q12018Component } from './q12018.component';

describe('Q12018Component', () => {
  let component: Q12018Component;
  let fixture: ComponentFixture<Q12018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q12018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q12018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
