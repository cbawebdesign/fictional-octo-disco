import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K12021Component } from './k12021.component';

describe('K12021Component', () => {
  let component: K12021Component;
  let fixture: ComponentFixture<K12021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K12021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K12021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
