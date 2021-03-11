import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q32019Component } from './q32019.component';

describe('Q32019Component', () => {
  let component: Q32019Component;
  let fixture: ComponentFixture<Q32019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q32019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q32019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
