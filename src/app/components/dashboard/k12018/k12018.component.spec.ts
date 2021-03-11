import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K12018Component } from './k12018.component';

describe('K12018Component', () => {
  let component: K12018Component;
  let fixture: ComponentFixture<K12018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K12018Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K12018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
