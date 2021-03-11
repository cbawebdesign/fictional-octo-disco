import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q22021Component } from './q22021.component';

describe('Q22021Component', () => {
  let component: Q22021Component;
  let fixture: ComponentFixture<Q22021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q22021Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q22021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
