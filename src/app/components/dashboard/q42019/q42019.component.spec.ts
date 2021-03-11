import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q42019Component } from './q42019.component';

describe('Q42019Component', () => {
  let component: Q42019Component;
  let fixture: ComponentFixture<Q42019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q42019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q42019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
