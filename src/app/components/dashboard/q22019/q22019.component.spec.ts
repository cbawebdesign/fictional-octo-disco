import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q22019Component } from './q22019.component';

describe('Q22019Component', () => {
  let component: Q22019Component;
  let fixture: ComponentFixture<Q22019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q22019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q22019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
