import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalCall2019Component } from './capital-call2019.component';

describe('CapitalCall2019Component', () => {
  let component: CapitalCall2019Component;
  let fixture: ComponentFixture<CapitalCall2019Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalCall2019Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalCall2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
