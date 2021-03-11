import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q42017Component } from './q42017.component';

describe('Q42017Component', () => {
  let component: Q42017Component;
  let fixture: ComponentFixture<Q42017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q42017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q42017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
