import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q22018Component } from './q22018.component';

describe('Q22018Component', () => {
  let component: Q22018Component;
  let fixture: ComponentFixture<Q22018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q22018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q22018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
