import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q32018Component } from './q32018.component';

describe('Q32018Component', () => {
  let component: Q32018Component;
  let fixture: ComponentFixture<Q32018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q32018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q32018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
