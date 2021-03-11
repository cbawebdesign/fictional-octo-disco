import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q12021Component } from './q12021.component';

describe('Q12021Component', () => {
  let component: Q12021Component;
  let fixture: ComponentFixture<Q12021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q12021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q12021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
