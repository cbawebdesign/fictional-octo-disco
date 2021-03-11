import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q42020Component } from './q42020.component';

describe('Q42020Component', () => {
  let component: Q42020Component;
  let fixture: ComponentFixture<Q42020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q42020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q42020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
