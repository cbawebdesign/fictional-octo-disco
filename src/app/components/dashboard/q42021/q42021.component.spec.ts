import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q42021Component } from './q42021.component';

describe('Q42021Component', () => {
  let component: Q42021Component;
  let fixture: ComponentFixture<Q42021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q42021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q42021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
