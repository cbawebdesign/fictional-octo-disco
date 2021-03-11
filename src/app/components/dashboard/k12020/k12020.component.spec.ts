import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K12020Component } from './k12020.component';

describe('K12020Component', () => {
  let component: K12020Component;
  let fixture: ComponentFixture<K12020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K12020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K12020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
