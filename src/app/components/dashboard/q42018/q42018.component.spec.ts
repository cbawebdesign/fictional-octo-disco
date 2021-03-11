import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q42018Component } from './q42018.component';

describe('Q42018Component', () => {
  let component: Q42018Component;
  let fixture: ComponentFixture<Q42018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q42018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q42018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
