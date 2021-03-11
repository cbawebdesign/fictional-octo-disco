import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K12017Component } from './k12017.component';

describe('K12017Component', () => {
  let component: K12017Component;
  let fixture: ComponentFixture<K12017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K12017Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K12017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
