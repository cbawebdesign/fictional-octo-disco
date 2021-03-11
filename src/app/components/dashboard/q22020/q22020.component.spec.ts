import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q22020Component } from './q22020.component';

describe('Q22020Component', () => {
  let component: Q22020Component;
  let fixture: ComponentFixture<Q22020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Q22020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Q22020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
